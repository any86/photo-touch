import AnyEvent from 'any-event';
import loadImage from './loadImage'

export type Point = [number, number];

export default class extends AnyEvent {

    img?: HTMLImageElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;

    // canvas尺寸
    canvasWidth = 0;
    canvasHeight = 0;
    org: Point = [0, 0];
    angle = 0;
    scale = 1;

    // 覆盖层图片
    overlays: HTMLImageElement[] | string[] = [];
    // 背景图
    backgrounds: HTMLImageElement[] | string[] = [];

    // 图片适配view后的尺寸
    imgWidth = 0;
    imgHeight = 0;

    // 原始坐标系原点与图片左上角距离
    offsetInOA: Point = [0, 0];

    // 形变坐标系原点与图片左上角距离
    private offsetInOB: Point = [0, 0];
    private _timeout = -1;

    constructor(el: HTMLCanvasElement, width = 400, height = 300) {
        super();
        el.width = width;
        el.height = height;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.canvas = el;
        this.context = this.canvas.getContext('2d');
    }

    
    get rad(): number {
        return this.angle * Math.PI / 180;
    }

    render() {
        clearTimeout(this._timeout)
        this._timeout = (setTimeout as Window["setTimeout"])(async () => {
            if (null == this.context || !this.img || 0 === this.canvasWidth || 0 === this.canvasHeight) return;
            // 初始值
            const { context, canvasWidth, canvasHeight, org, rad, offsetInOB, scale, img, imgWidth, imgHeight } = this;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            this.drawChessboard(context);

            // 背景层
            for (const backgroundImage of this.backgrounds) {
                context.drawImage(await loadImage(backgroundImage), 0, 0, this.canvasWidth, this.canvasHeight);
            }

            // 用户图
            context.save();
            context.translate(org[0], org[1]);
            context.scale(scale, scale);
            context.rotate(rad);
            context.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                offsetInOB[0],
                offsetInOB[1],
                imgWidth,
                imgHeight
            );

            // debug
            if('development' === process.env.NODE_ENV){
                context.fillStyle = '#d10';
                context.fillRect(-30 / scale, -30 / scale, 60 / scale, 60 / scale);
            }

            context.restore();
            // 覆盖层
            for (const overlayImage of this.overlays) {
                context.drawImage(await loadImage(overlayImage), 0, 0, this.canvasWidth, this.canvasHeight);
            }
            this.emit('transform', {
                offset: this.offsetInOA,
                scale: this.scale,
                angle: this.angle,
                org: this.org
            });
        }, 0);
    }



    changeOrg(org: Point) {
        this.org = org;
        // 图片不动,
        // OB内的offset变化
        this.offsetInOB = this.switchToOB(this.offsetInOA);
        this.render();
    }
    /**
     * 换覆盖层图片
     * @param overlays 覆盖图(多)
     */
    changeOverlay(...overlays: HTMLImageElement[] | string[]) {
        this.overlays = overlays;
        this.render();
    }

    changeBackground(...backgrounds: HTMLImageElement[]) {
        this.backgrounds = backgrounds;
        this.render();
    }

    /**
     * 换图
     * @param img 
     */
    async changeImg(img: HTMLImageElement|string) {
        this.img = await loadImage(img);
        this.reset();
    }

    /**
     * 图片在canvas居中
     */
    reset() {
        if (!this.img) return
        this.changeOrg([this.canvasWidth / 2, this.canvasHeight / 2]);
        const { top, left, width, height } = this.getCenterRectOffsetTopLeft(
            this.img.width,
            this.img.height,
            this.canvasWidth,
            this.canvasHeight
        );

        this.offsetInOA = [left, top];
        this.scale = 1;
        this.angle = 0;
        // 要在scale/angle之后计算
        this.offsetInOB = this.switchToOB(this.offsetInOA);
        this.imgWidth = width;
        this.imgHeight = height;
        this.render();

    }



    /**
     * 移动图片
     * @param dx x移动距离 
     * @param dy y移动距离
     */
    move(dx: number, dy: number) {
        const [x, y] = this.offsetInOA;
        this.moveTo(x + dx, y + dy);
        return this.offsetInOA;
    }

    moveTo(x: number, y: number) {
        this.offsetInOA = [x, y];
        this.offsetInOB = this.switchToOB(this.offsetInOA);
        this.render();
    }

    changeOrgToImageCenter() {
        // 图片中心点在OB中的坐标
        const newOrgInOB: Point = [this.offsetInOB[0] + this.imgWidth / 2, this.offsetInOB[1] + this.imgHeight / 2];
        const orgInOA = this.switchToOA(newOrgInOB);
        this.changeOrg(orgInOA);
    }

    rotate(deltaAngle: number, org?: Point): number {
        this.rotateTo(this.angle + deltaAngle, org);
        return this.angle;
    }

    rotateTo(angle: number, org?: Point) {
        if (void 0 === org) {
            this.changeOrgToImageCenter();
        }
        this.angle = angle;
        // 角度变了标准坐标系中的坐标变了
        this.offsetInOA = this.switchToOA(this.offsetInOB);
        this.render();
    }

    zoom(deltaScale: number, org?: Point): number {
        this.zoomTo(this.scale * deltaScale, org);
        return this.scale;
    }

    zoomTo(scale: number, org?: Point) {
        if (void 0 === org) {
            this.changeOrgToImageCenter();
        }
        this.scale = scale;
        this.offsetInOA = this.switchToOA(this.offsetInOB);
        this.render();
    }

    /**
     * 元素坐标系中的点在canvas坐标系中的坐标
     * @param {Array} 元素坐标系中的点
     */
    switchToOB([x, y]: Point): Point {
        const { rad, scale, org } = this;
        // 计算平移
        const dx = x - org[0];
        const dy = y - org[1];
        // 计算旋转/缩放
        return [
            (Math.cos(rad) * dx + Math.sin(rad) * dy) / scale,
            (-Math.sin(rad) * dx + Math.cos(rad) * dy) / scale,
        ];
    }

    /**
     * 形变坐标系内的坐标转换成标准坐标系中的坐标
     * @param {Array} 形变坐标系内的点
     */
    switchToOA([x, y]: Point): Point {
        // 计算平移
        // 计算旋转/缩放
        const { rad, scale, org } = this;
        return [
            (Math.cos(rad) * x - Math.sin(rad) * y) * scale + org[0],
            (Math.sin(rad) * x + Math.cos(rad) * y) * scale + org[1],
        ];
    }


    drawChessboard(context: CanvasRenderingContext2D) {
        const count = [24, Math.ceil((24 * this.canvasHeight) / this.canvasWidth)];
        const size = this.canvasWidth / count[0];
        context.save();
        let color = '#ddd';
        let rowStartColor = color;
        for (let i = 0; i <= count[0]; i++) {
            for (let j = 0; j < count[1]; j++) {
                context.fillStyle = color;
                const x = 0 + size * i;
                const y = 0 + size * j;
                context.fillRect(x, y, size, size);
                color = '#ddd' === color ? '#fff' : '#ddd';
            }
            rowStartColor = '#ddd' === color ? '#fff' : '#ddd';
            color = rowStartColor;
        }
        context.stroke();
        context.restore();
    }

    /**
     * 获取图片在canvas元素中的定位信息
     * 让图片居中对齐
     */
    getCenterRectOffsetTopLeft(width: number, height: number, canvasWidth: number, canvasHeight: number) {
        let rate = [width / canvasWidth, height / canvasHeight];
        if (rate[0] > rate[1]) {
            const newHeight = Math.floor((canvasWidth * height) / width);
            return {
                width: canvasWidth,
                height: newHeight,
                top: (canvasHeight - newHeight) / 2,
                left: 0,
            };
        } else {
            const newWidth = Math.floor((canvasHeight * width) / height);
            return {
                width: newWidth,
                height: canvasHeight,
                top: 0,
                left: (canvasWidth - newWidth) / 2,
            };
        }
    }
}