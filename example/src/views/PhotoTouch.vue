<template>
    <article class="p-3">
        <section class="d-flex pos-r">
            <canvas ref="canvas" style="width:100%;"></canvas>
            <div class="pos-a" style="width:50px; right:-20px;top:16px;">
                <button
                    class="a-button a-button--dark ml-1"
                    style="background:rgba(0, 0, 0, 0.6); color:#fff;"
                    @click="photoTouch.zoom(0.9)"
                >
                    <i class="ion-md-remove font-1"></i>
                </button>
                <button
                    class="a-button a-button--dark mt-1"
                    style="background:rgba(0, 0, 0, 0.6); color:#fff;"
                    @click="photoTouch.zoom(1.1)"
                >
                    <i class="ion-md-add font-1"></i>
                </button>

                <!-- <button
                    class="a-button a-button--dark mt-1"
                    style="background:rgba(0, 0, 0, 0.6); color:#fff;"
                    @click="photoTouch.rotate(-90)"
                >
                    <i class="ion-md-refresh rotate-180 d-block font-1"></i>
                </button>-->
                <button
                    class="a-button a-button--dark mt-1"
                    style="background:rgba(0, 0, 0, 0.6); color:#fff;"
                    @click="photoTouch.rotate(90)"
                >
                    <i class="ion-md-refresh font-1"></i>
                </button>

                <button
                    class="a-button a-button--dark mt-1"
                    style="background:rgba(0, 0, 0, 0.6); color:#fff;"
                    @click="togglePreview"
                >
                    <i :class="[`ion-md-eye${isShowLine ? '' : '-off'}`]" class="font-1"></i>
                </button>
            </div>
        </section>

        <div class="d-flex mt-1">
            <ButtonLoadFile
                class="a-button a-button--dark a-button--outline flex-1"
                @loaded="onImageLoaded"
            >Change Photo</ButtonLoadFile>

            <button class="a-button a-button--primary flex-1">
                <i class="ion-md-checkmark font-1" style="vertical-align: sub;"></i> Done
            </button>
        </div>

        <section>
            <hr class="mt-2" />
            <!-- Offset -->
            <label class="a-input">
                <input
                    :value="offset[0]"
                    @input="photoTouch.moveTo(Number($event.target.value),offset[1])"
                    type="range"
                    max="400"
                />
                OffsetX: {{offset[0]}}
            </label>
            <label class="a-input">
                <input
                    :value="offset[1]"
                    @input="photoTouch.moveTo(offset[0],Number($event.target.value))"
                    type="range"
                    max="400"
                />
                OffsetY: {{offset[1]}}
            </label>
            <hr class="mt-2" />

            <label class="a-input">
                <input
                    :value="org[0]"
                    @input="photoTouch.changeOrg([org[0],Number($event.target.value)])"
                    type="range"
                    max="2000"
                />
                OX:{{org[0]}}
            </label>

            <label class="a-input">
                <input
                    :value="org[1]"
                    @input="photoTouch.changeOrg([Number($event.target.value), org[1]])"
                    type="range"
                    max="2000"
                />
                OY:{{org[1]}}
            </label>

            <label class="a-input">
                <input
                    :value="scale"
                    @input="photoTouch.zoomTo(Number($event.target.value))"
                    min="0.1"
                    max="2"
                    step="0.1"
                    type="range"
                />
                Scale: {{scale}}
            </label>
            <label class="a-input">
                <input
                    :value="angle"
                    @input="photoTouch.rotateTo(Number($event.target.value))"
                    type="range"
                    max="360"
                />
                A:{{angle}}
            </label>
        </section>
    </article>
</template>
<script>
import PhotoTouch from '../../../packages/photo-touch/dist/index.umd';
import ButtonLoadFile from './ButtonLoadFile';
export default {
    name: 'DIY',

    components: { ButtonLoadFile },

    data() {
        return {
            img:null,
            isShowLine: false,
            photoTouch: null,
            overlayImgs: [],
            activeOverlay: {},
            org: [1642 / 2, 2434 / 2],
            angle: 0,
            scale: 1,
            offset: [0, 0],
            width: 1642,
            height: 2434,
            background: 'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11_6cf0cab4-3c19-4ff6-b203-2c430f4ebf64.png?v=1597329472',

            lineOverlays: ['https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11_a8cc865c-b6cd-4457-b306-d5fdf800a42e.png?v=1597329680'],

            previewOverlays: [
                'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11.png?v=1597309733',
                'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11_16fe288a-66aa-466b-b408-1dd591e4cce9.png?v=1597329488',
            ],
        };
    },

    watch: {
        isShowLine(isShowLine) {
            const {img} = this;
            if (isShowLine) {
                this.photoTouch.changeOverlay(...this.lineOverlays);
            } else {
                this.photoTouch.changeBackground(this.background);
                this.photoTouch.changeOverlay(...this.previewOverlays);
            }
        },
    },

    async mounted() {
        this.photoTouch = new PhotoTouch(this.$refs.canvas, this.width, this.height);
        this.photoTouch.on('transform', ({ offset, scale, angle, org }) => {
            this.offset = offset;
            this.scale = scale;
            this.angle = angle;
            this.org = org;
        });

        this.photoTouch.on('panstart', () => {
            this.isShowLine = true;
        });

        this.photoTouch.on('panend', () => {
            this.isShowLine = false;
        });

        this.photoTouch.on('pinchstart', () => {
            this.isShowLine = true;
        });

        this.photoTouch.on('pinchend', () => {
            this.isShowLine = false;
        });

        this.photoTouch.on('rotatestart', () => {
            this.isShowLine = true;
        });

        this.photoTouch.on('rotateend', () => {
            this.isShowLine = false;
        });
    },

    methods: {
        async togglePreview() {
            this.isShowLine = !this.isShowLine;
        },

        async onImageLoaded(e) {
            const { img } = e[0].source;
            this.img = img;
            this.photoTouch.changeBackground(this.background);
            this.photoTouch.changeImg(img);
            this.photoTouch.changeOverlay(...this.previewOverlays);
        },

        reset() {
            this.photoTouch.reset();
        },
    },
};
</script>

<style scope lang="scss">
canvas {
    cursor: move;
}
label {
    display: block;
}
</style>