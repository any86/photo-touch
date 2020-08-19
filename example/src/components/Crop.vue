<template>
    <canvas :width="width" :height="height" />
</template>

<script>
import AnyTouch from 'any-touch';
import loadImage from '../../../packages/load-image/dist/index.es';
export default {
    name: 'Crop',

    props:{
        width:{
            type:Number,
            default:500
        },
        height:{
            type:Number,
            default:500
        }
    },

    data() {
        return { at: null,context:null, };
    },

    async mounted() {
        const URL = 'https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/Purple-and-Yellow-Playful-Monster-Daycare-Halloween-Flyer.jpg?v=1595652895';
        this.context = this.$el.getContext('2d');
        this.context.drawImage(await loadImage(URL),0,0,this.width,this.height);
        this.at = new AnyTouch(this.$el);
    },
};
</script>

<style scoped lang="scss">
</style>
