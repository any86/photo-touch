<template>
    <article class="page-merge">
        <div class="page-merge__left">
            <div class="page-merge__left__content">
                <canvas ref="canvas" :width="width" :height="height" />
                <!-- <ul>
                    <li v-for="backgroundURL in backgroundURLs" :key="backgroundURL">
                        <img :src="backgroundURL" @click="changeBackgroundOnline(backgroundURL)" />
                    </li>
                </ul> -->
            </div>
        </div>

        <div class="page-merge__middle">
            <button class="button-big a-button a-button--success a-button-save" @click="save">
                <i class="ion-md-cloud-download" /> 保存
            </button>

            <ButtonLoadFile
                @loaded="changeBackground"
                class="button-big p-0 a-button a-button--dark a-button-change-background"
            >
                <i class="ion-md-image" /> 背景
            </ButtonLoadFile>
            <ButtonLoadFile @loaded="onImageLoaded" class="button-big p-0 a-button a-button--dark a-button--outline">
                <i class="ion-md-folder-open" /> 打开
            </ButtonLoadFile>
            <ul class="mt-2">
                <li class="img" v-for="{ src } in imagesUploaded" :key="src">
                    <img :src="src" />
                </li>
            </ul>
        </div>

        <div class="page-merge__right">
            <div class="form-item">
                <label >文件名<input v-model.lazy="fileName" type="text" placeholder="请输入保存后的文件名" /></label>
            </div>

            <div class="form-item">
                <label >背景宽度(W)<input v-model.lazy="width" type="text" placeholder="请输入背景宽度"/></label>
            </div>

            <div class="form-item">
                <label >背景高度(H)<input v-model.lazy="height" type="text" placeholder="请输入背景高度"/></label>
            </div>
        </div>
    </article>
</template>
<script>
import { saveAs } from 'file-saver';
import loadImage from '../../../packages/load-image/dist/index.es';
import ButtonLoadFile from './ButtonLoadFile';
import { POS } from './Merge.config';
export default {
    name: 'Merge',

    components: { ButtonLoadFile },

    data() {
        return {
            fileName: '',
            width: 1417,
            height: 5551,
            context: null,
            backgroundImage: null,
            imagesUploaded: [],
            backgroundURLs: [
                'sock_bg/1.png',
                'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/merchant-taking-sale-with-chip-and-swipe-reader.jpg?v=1593507608',
            ],
        };
    },

    watch: {
        width() {
            this.render();
        },

        height() {
            this.render();
        },
    },

    async mounted() {
        this.context = this.$refs.canvas.getContext('2d');
        this.backgroundImage = await loadImage(this.backgroundURLs[0]);
        this.context.drawImage(this.backgroundImage, 0, 0);
    },

    methods: {
        save() {
            this.$refs.canvas.toBlob(
                (blob) => {
                    saveAs(blob, `${this.fileName}.png`);
                },
                'image/png',
                1
            );
        },

        async changeBackgroundOnline(url) {
            this.backgroundImage = await loadImage(url);
            this.render();
        },

        /**
         * 换背景,本地
         */
        changeBackground(data) {
            const { source } = data[0];
            const { img, fileName } = source;
            this.backgroundImage = img;
            // this.fileName = fileName.split('.')[0];
            this.render();
        },

        onImageLoaded(data) {
            for (const { source } of data) {
                const { img } = source;
                this.imagesUploaded.push(img);
            }
            this.render();
        },

        render(data) {
            const { context } = this;
            context.clearRect(0, 0, this.width, this.height);
            context.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
            if (0 < this.imagesUploaded.length) {
                const imageLength = this.imagesUploaded.length;
                for (const [index, { x, y, w, h }] of POS.entries()) {
                    const img = this.imagesUploaded[index % imageLength];
                    context.drawImage(img, 0, 0, img.width, img.height, x - w / 2, y - h / 2, w, h);
                }
            }
        },
    },
};
</script>

<style scope lang="scss">
.page-merge {
    display: flex;
    box-sizing: border-box;
    height: 100vh;

    .button-big {
        height: 120px;
        width: 120px;
        line-height: 120px;
        font-size: 24px !important;
    }

    &__left {
        position: relative;
        overflow: hidden;
        height: 100%;
        flex-shrink: 0;
        padding: 16px;
        box-shadow: 2px 0 8px rgba(#000, 0.1);
        &__content {
            display: flex;
            position: relative;
            height: 100%;
            width: 100%;
            box-shadow: 0 0 5px 1px rgba(#000, 0.26);
            canvas {
                height: 100%;
            }

            ul {
                border: 1px solid #ddd;
                width: 80px;
                overflow-x: hidden;
                overflow-y: scroll;
                li {
                    width: 100%;
                    height: 100px;
                    & + li {
                        border-top: 1px solid #ddd;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: 100px;
                        object-fit: contain;
                    }
                }
            }

            > .a-button-save {
                position: absolute;
                left: 8px;
                top: 8px;
                width: 120px;
            }

            > .a-button-change-background {
                position: absolute;
                left: 0px;
                top: 58px;
                width: 120px;
                height: 40px;
            }
        }
    }

    &__middle {
        flex: 1;
        padding: 16px;
        ul {
            display: flex;
            li.img {
                list-style: none;
                height: 120px;
                width: 120px;
                border: 1px solid #ddd;
                & + li {
                    margin-left: 8px;
                }

                &.active {
                    box-shadow: 0 0 6px 6px rgba(#000, 0.26);
                }

                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: contain;
                }
            }

            li {
                .button-add {
                    height: 120px;
                    width: 120px;
                    line-height: 120px;
                    font-size: 24px !important;
                }
            }
        }
    }

    &__right {
        box-shadow: -2px 0 8px rgba(#000, 0.1);
        .form-item {
            background: #fff;
            padding: 8px;
            border-bottom: 1px solid #eee;
            label {
                display: flex;
                align-items: center;
                input {
                    margin-left: 8px;
                    padding: 8px;
                }
            }
        }
    }
}
</style>