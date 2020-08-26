<template>
    <canvas
        class="crop"
        @tap="onTap"
        @panstart="onPanstart"
        @panmove="onPanmove"
        @panend="onPanend"
        ref="c"
        :width="width"
        :height="height"
    />
</template>

<script>
import AnyTouch from 'any-touch';
import loadImage from '../../../packages/load-image/dist/index.es';
export default {
    name: 'Crop',

    props: {
        width: {
            type: Number,
            default: 2000,
        },
        height: {
            type: Number,
            default: 2000,
        },
    },

    data() {
        return {
            at: null,
            context: null,
            stack: [],
            paths: [],
            activePath: [],
            activePathPoints: [],
            hitItem: null,
            canDrawPath: true,
        };
    },

    async mounted() {
        const URL =
            'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/Purple-and-Yellow-Playful-Monster-Daycare-Halloween-Flyer.jpg?v=1595652895';
        this.context = this.$refs.c.getContext('2d');
        // this.context.drawImage(await loadImage(URL), 0, 0, this.width, this.height);
        this.at = new AnyTouch(this.$el);
        this.at.get('pan').set({ threshold: 0 });
    },

    methods: {
        switchPointToCanvas([x, y]) {
            const { top, left } = this.$refs.c.getBoundingClientRect();
            const { offsetWidth } = this.$refs.c;
            const rate = this.width / offsetWidth;
            return [Math.round((x - left) * rate), Math.round((y - top) * rate)];
        },

        onPanstart(e) {
            this.hitItem = this.hitTest(e);
            this.canDrawPath = !(void 0 === this.hitItem && 0 < this.stack.length);

            const { context } = this;
            const [x, y] = this.switchPointToCanvas([e.x, e.y]);

            this.drawCircle({ x, y, r: 20, fill: '#69c' });
            context.globalCompositeOperation = 'destination-over';
            this.activePath = [[x, y]];
            this.paths.push(this.activePath);
            // this.activePathPoints = [{ type: 'point', x, y }];
            // this.stack.push({ type: 'path', points: this.activePathPoints });
            context.save();
            context.strokeStyle = '#f50';
            context.lineWidth = 16;
            context.beginPath();
            context.moveTo(x, y);
        },

        onPanmove(e) {
            if (!this.canDrawPath) return;

            // context.globalCompositeOperation = 'source-over';
            const [x, y] = this.switchPointToCanvas([e.x, e.y]);
            this.activePath.push([x, y]);
            // this.activePathPoints.push({ type: 'point', x, y });
            const { context } = this;
            context.lineTo(x, y);
            context.stroke();
        },

        onPanend(e) {
            if (!this.canDrawPath) return;

            const [x, y] = this.switchPointToCanvas([e.x, e.y]);
            const { context } = this;
            context.closePath();
            context.restore();
            context.globalCompositeOperation = 'source-over';
            this.drawCircle({ x, y, r: 20, fill: '#123' });
            console.log(this.paths);
        },

        onTap(e) {
            const { context } = this;
            const [x, y] = this.switchPointToCanvas([e.x, e.y]);
            if (void 0 === this.activePath.s) {
                this.activePath = { s: [x, y] };
                this.paths.push(this.activePath);
                context.moveTo(x, y);
            } else {
                const { context } = this;
                const { s } = this.activePath;
                const c = [s[0] + (x - s[0]) / 2, s[1] + (y - s[1]) / 2];
                this.activePath.c = c;
                this.activePath.e = [x, y];
                console.log(s, c, [x, y]);
                context.quadraticCurveTo(c[0], c[1], x, y);
                context.strokeStyle = '#f10';
                context.lineWidth = 16;
                context.stroke();
                this.activePath = {};
            }
        },

        drawCircle({ x, y, r, fill }) {
            const { context } = this;
            context.save();
            context.beginPath();
            context.arc(x, y, r, 0, 2 * Math.PI, false);
            context.fillStyle = fill;
            context.fill();
            context.closePath();
            context.restore();
        },

        hitTest(point) {
            const [x, y] = this.switchPointToCanvas([point.x, point.y]);
            for (const item of this.stack) {
                if ('path' === item.type) {
                    const startPoint = item.points[0];
                    this.drawCircle({ x: startPoint.x, y: startPoint.y, r: 20 });
                    if (this.context.isPointInPath(x, y)) {
                        return item;
                    }
                }
            }
        },

        draw() {
            for (const item of this.stack) {
                this.drawCircle(item);
            }
        },
    },
};
</script>

<style scoped lang="scss">
.crop {
    display: block;
}
.crop {
    max-width: 80%;
    height: 80vh;
    margin: 10vh auto;
    box-shadow: 0 0 8px 1px rgba(#000, 0.1);
}
</style>
