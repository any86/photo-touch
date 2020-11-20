<template>
    <ul class="orders">
        <li class="order" v-for="order in ORDERS" :key="order.name">
            <h1>{{ order.name }}({{ order.items.length }}张)</h1>
            <div class="order__info mt-1" v-for="(item) in order.items" :key="item.image">
                <img :src="item.image" alt="用户头像" />

                <img v-if="void 0 !== map[item.id]" class="ml-2" :src="map[item.id].file_url" alt="用户头像" />
                <label class="order__info__upload">
                    <input type="file" @change="onFileChange(item.id, $event)" />
                    <i class="ion-ios-image"></i>
                    {{ void 0 !== map[item.id] ? '重新上传' : '上传' }}
                </label>

                <span
                    v-if="map[item.id]"
                    class="a-button a-button--outline a-button--primary ml-1 order__info__button-merge"
                    @click="goToMerge(map[item.id].file_url, item, order.name)"
                >
                    <i class="ion-ios-images"></i>
                    合成</span
                >
            </div>
        </li>
    </ul>
</template>

<script>
const ORDERS = require('../../order.json');

// const CryptoJS = require('crypto-js');
const AV = require('leancloud-storage');
AV.init({
    appId: 'vJNmEEOC7YmjcmMVSYy9RnSk-gzGzoHsz',
    appKey: '18Cff63ypKTyKVdzwkUUVH7M',
    serverURL: 'https://vjnmeeoc.lc-cn-n1-shared.com',
});

export default {
    name: 'List',

    data() {
        return {
            token: '',
            // 订单
            ORDERS,
            // 用户头像
            cropList: [],
        };
    },

    computed: {
        map() {
            const map = {};
            this.cropList.forEach((item) => {
                map[item.item_id] = item;
            });
            return map;
        },
    },

    async mounted() {
        await this.getCropList();
    },

    methods: {
        /**
         * 跳转到合成页面
         * @param file_url 用户头像
         * @param item 所在购物车商品信息
         */
        goToMerge(file_url, item, fileName) {
            this.$store.commit('setMergeData', { ...item, file_url, fileName });
            this.$router.push({ path: '/merge' });
        },

        async getCropList() {
            const query = new AV.Query('OrderImage');
            // 检查是否上传过图片
            const row = await query.find();
            this.cropList = row.map((item) => item.toJSON());
        },

        /**
         * 上传
         * @param item_id 产品在购物车中的id
         * @param isChange 本次是否是重新上传动作
         * @param e 原生上传事件对象
         */
        async onFileChange(item_id, e) {
            const fileObj = new AV.File(`${item_id}.png`, e.target.files[0]);
            const file = await fileObj.save();
            const query = new AV.Query('OrderImage');
            // 检查是否上传过图片
            query.equalTo('item_id', item_id);
            const row = await query.find();
            // 添加
            if (0 === row.length) {
                const todo = new AV.Object('OrderImage');
                todo.set('item_id', item_id);
                todo.set('file_id', file.id);
                todo.set('file_url', file.toJSON().url);
                await todo.save();
            }
            // 编辑
            else {
                const todo = AV.Object.createWithoutData('OrderImage', row[0].id);
                todo.set('file_id', file.id);
                todo.set('file_url', file.toJSON().url);
                await todo.save();
            }
            this.getCropList();
        },
    },
};
</script>

<style scoped lang="scss">
$row-height: 140px;
.orders {
    .order {
        padding: 16px;
        // box-shadow: 0 0 8px 1px rgba(#000, 0.1);
        width: 100%;
        margin-bottom: 8px;
        &__info {
            display: flex;
            & ~ .order__info {
                padding-top: 16px;
                border-top: 1px solid #ddd;
            }
            > img {
                border: 1px solid #ddd;
                padding: 8px;
                object-fit: contain;
                height: $row-height;
                width: $row-height;
                display: block;
                margin-bottom: 8px;
            }
            &__upload {
                border-radius: 4px;
                display: block;
                margin-left: 16px;
                box-sizing: border-box;
                border: 1px dashed #ccc;
                height: $row-height;
                line-height: $row-height;
                width: $row-height;
                font-size: 24px;
                text-align: center;
                input {
                    opacity: 0;
                    display: none;
                }
            }
            &__button-merge {
                height: $row-height;
                line-height: $row-height;
                width: $row-height;
                font-size: 24px;
                text-align: center;
            }
        }
    }
}
</style>
