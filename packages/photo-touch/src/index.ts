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

        at.on(['tap', 'pinchstart', 'rotatestart'], _changeOrg);

        at.on('at:after', e => {
            this.emit(e.type, e);
        });

        at.on('panmove', (e: AnyTouchEvent) => {
            const { deltaX, deltaY } = e;
            this.move(deltaX / this.moveRate, deltaY / this.moveRate);
        });


        at.on('pinchmove', ({ deltaScale }: AnyTouchEvent) => {
            this.zoom(deltaScale, this.org);
        });

        at.on('rotatemove', ({ deltaAngle }: AnyTouchEvent) => {
            this.rotate(deltaAngle, this.org);
        });
    }

    destroy() {
        this.at.destroy();
    }
}