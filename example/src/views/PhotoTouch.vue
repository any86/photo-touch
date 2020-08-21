<template>
    <article class="page-photo-touch">
        <section class="d-flex pos-r">
            <canvas ref="canvas" style="width:100%;"></canvas>
            <p v-if="loading">loading</p>
            <div v-if="null !== img" class="pos-a" style="width:50px; right:-8px;top:16px;">
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
                    class="a-button a-button--danger mt-1"
                    style="background:rgba(255, 0, 0, 0.6); color:#fff;"
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
            ><i class="ion-md-image font-1" style="vertical-align: sub;"/> Change</ButtonLoadFile>

            <button class="a-button a-button--primary flex-1" @click="toDataURL">
                <i class="ion-md-checkmark font-1" style="vertical-align: sub;"></i> Done
            </button>
        </div>
        <img style="width:100%;" :src="dataURL" />
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
            dataURL: '',
            loading: false,
            img: null,
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
            background: '#fff',

            lineOverlays: [
                'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11_b44dc4e2-3e32-4b51-80de-675d8a273aed.png?v=1597476179',
            ],

            previewOverlays: [
                'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11_0d08b826-a84d-4224-aca2-4f928c6fe6e5.png?v=1597476180',
                'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/iPhone11_9fa84a77-f492-424d-be4c-6241e4aa6bd7.png?v=1597476180',
            ],
        };
    },

    watch: {
        isShowLine(isShowLine) {
            const { img } = this;
            this.loading = true;
            if (isShowLine) {
                this.photoTouch.changeOverlay(...this.lineOverlays);
            } else {
                this.photoTouch.changeBackground(this.background);
                this.photoTouch.changeOverlay(...this.previewOverlays);
            }
            this.loading = false;
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

        this.photoTouch.on(['panstart', 'pinchstart', 'rotatestart', 'tap'], () => {
            this.isShowLine = true;
        });

        this.photoTouch.on(['panend', 'pinchend', 'rotateend'], () => {
            this.isShowLine = false;
        });
    },

    methods: {
        toDataURL() {
            this.isShowLine = false;
            this.$nextTick(() => {
                this.dataURL = this.photoTouch.canvas.toDataURL('image/jpeg',0.7);
                console.log(this.img.src)
            });
        },
        async togglePreview() {
            this.isShowLine = !this.isShowLine;
        },

        async onImageLoaded(e) {
            this.loading = true;
            const { img } = e[0].source;
            this.img = img;
            this.photoTouch.changeBackground(this.background);
            this.photoTouch.changeImg(img);
            this.photoTouch.changeOverlay(...this.previewOverlays);
            this.loading = false;
        },

        reset() {
            this.photoTouch.reset();
        },
    },
};
</script>

<style scope lang="scss">
article.page-photo-touch {
    padding: 16px;
  }

@media (min-width: 640px) {
  article.page-photo-touch {
    max-width: 375px;
    margin: 16px auto;
    box-shadow: 0 0 8px 1px rgba(#000,0.1);
  }
}


canvas {
    cursor: move;
}
label {
    display: block;
}
</style>