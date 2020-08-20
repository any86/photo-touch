<template>
    <canvas
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
        return { at: null, context: null, stack: [] };
    },

    async mounted() {
        const URL = 'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/Purple-and-Yellow-Playful-Monster-Daycare-Halloween-Flyer.jpg?v=1595652895';
        this.context = this.$refs.c.getContext('2d');
        this.context.drawImage(await loadImage(URL),0,0,this.width,this.height);
        this.at = new AnyTouch(this.$el);
        this.at.get('pan').set({threshold:0});
    },

    methods: {
        switchPointToCanvas([x, y]) {
            const { top, left } = this.$refs.c.getBoundingClientRect();
            const { offsetWidth } = this.$refs.c;
            const rate = this.width / offsetWidth;
            return [(x - left) * rate, (y - top) * rate];
        },

        onPanstart(e) {
            const [x, y] = this.switchPointToCanvas([e.x, e.y]);
            this.stack.push({ type: 'point', x, y });
            const { context } = this;
            context.save();
            context.strokeStyle = '#f50';
            context.lineWidth = 6;
            context.beginPath();
            context.moveTo(x, y);
        },

        onPanmove(e) {
            const [x, y] = this.switchPointToCanvas([e.x, e.y]);
            this.stack.push({ type: 'point', x, y });
            const { context } = this;
            context.lineTo(x, y);
            context.stroke();
        },

        onPanend() {
            const { context } = this;
            context.closePath();
            context.restore();
        },

        onTap(e) {
            const [x, y] = this.switchPointToCanvas([e.x, e.y]);
            this.stack.push({ type: 'circle', x, y, r: 30, fill: '#69C' });
            this.draw();
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

        draw() {
            for (const item of this.stack) {
                this.drawCircle(item);
            }
        },
    },
};
</script>

<style scoped lang="scss">
</style>
