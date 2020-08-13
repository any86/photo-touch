import AnyTouch from 'any-touch';
import type { AnyTouchEvent } from '@any-touch/shared';
import Core from '@photo-touch/photo';
import type { Point } from '@photo-touch/photo';

export default class extends Core {
    at: AnyTouch;
    // canvas元素宽度和内部宽度比
    moveRate = 1;

    constructor(canvas: HTMLCanvasElement, width = 400, height = 300) {
        super(canvas, width, height);
        this.moveRate = canvas.offsetWidth / width;
        const at = new AnyTouch(canvas);
        this.at = at;

        const _changeOrg = ({ x, y }: AnyTouchEvent) => {
            const { moveRate, canvas } = this;
            const rect = canvas.getBoundingClientRect();
            const newOrg: Point = [(x - rect.left) / moveRate, (y - rect.top) / moveRate];
            this.changeOrg(newOrg);
            this.emit('change-org', newOrg);
        }

        at.on('tap', _changeOrg);
        at.on('pinchstart', _changeOrg);
        at.on('rotatestart', _changeOrg);

        at.on('panstart', (e: AnyTouchEvent) => {
            this.emit('panstart', e);
        });

        at.on('pinchstart', (e: AnyTouchEvent) => {
            this.emit('pinchstart', e);
        });

        at.on('rotatestart', (e: AnyTouchEvent) => {
            this.emit('rotatestart', e);
        });


        at.on('panend', (e: AnyTouchEvent) => {
            this.emit('panend', e);
        });

        at.on('pinchend', (e: AnyTouchEvent) => {
            this.emit('pinchend', e);
        });

        at.on('rotateend', (e: AnyTouchEvent) => {
            this.emit('rotateend', e);
        });

        at.on('panmove', (e: AnyTouchEvent) => {
            const { deltaX, deltaY } = e;
            this.move(deltaX / this.moveRate, deltaY / this.moveRate);
        });


        at.on('pinchmove', ({ deltaScale, scale }: AnyTouchEvent) => {
            this.zoom(deltaScale);
        });

        at.on('rotatemove', ({ deltaAngle }: AnyTouchEvent) => {
            this.rotate(deltaAngle, this.org);
        });
    }

    destroy() {
        this.at.destroy();
    }
}