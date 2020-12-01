<template>
    <article>
        <Spin v-if="isLoading" fix size="large" style="position: fixed"></Spin>
        <BackTop></BackTop>
        <header class="header">
            <div class="flex-1"></div>
            <h4>显示删除按钮 <i-switch v-model="isShowButtonRemove" true-color="#ff4949"></i-switch></h4>
        </header>

        <ul class="orders">
            <li class="order" v-for="order in ORDERS" :key="order.name">
                <h1>{{ order.name }}({{ order.items.length }}张)</h1>
                <div class="order__info mt-1" v-for="item in order.items" :key="item.id">
                    <img v-lazy="item.image" alt="用户上传图" />
                    <!-- 抠图后 -->
                    <span v-for="row in map[item.id]" class="order__info__crop-image" :key="row.file_id">
                        <img v-lazy="row.file_url" alt="抠图" />
                        <p
                            v-show="isShowButtonRemove"
                            class="order__info__crop-image__button-remove"
                            @click="removeCropImage(row)"
                        >
                            <Icon type="md-close" /> 删除
                        </p>
                    </span>

                    <label class="order__info__upload">
                        <input type="file" @change="onFileChange(item.id, $event)" />
                        <Icon type="md-cloud-upload" />
                        上传
                    </label>

                    <span
                        v-if="map[item.id]"
                        class="a-button a-button--outline a-button--primary ml-1 order__info__button-merge"
                        @click="goToMerge(map[item.id], item, order.name)"
                    >
                        <Icon type="md-play" />
                        合成</span
                    >

                    <span class="p-1">
                        <p>
                            <a :href="genURL(item.title)" target="_new">标题: {{ item.title }}</a>
                        </p>
                        <p v-if="1 == item.quantity">数量: {{ item.quantity }}</p>
                        <p v-else class="text-danger">数量: {{ item.quantity }}</p>

                        <p>sku: {{ item.sku }}</p>
                        <p>选项: {{ item.variant_title }}</p>
                    </span>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>
const ORDERS = require('../../order.json');
// const CryptoJS = require('crypto-js');
import AV from './lean';
export default {
    name: 'List',

    data() {
        return {
            isLoading: true,
            isShowButtonRemove: false,
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
                console.log(item.item_id > 6158316896320);
                if (void 0 === map[item.item_id]) {
                    map[item.item_id] = [item];
                } else {
                    map[item.item_id].push(item);
                }
            });
            return map;
        },
    },

    async mounted() {
        await this.getCropList();
        // this.cropList.forEach((item) => {
        //     console.log(item)
        // });
    },

    methods: {
        genURL(title) {
            const id = title
                .split(' ')
                .map((word) => word.toLowerCase())
                .join('-');
            const url = 'https://findbestgift.com/collections/sales/products/';
            return url + id;
        },
        /**
         * 跳转到合成页面
         * @param cropImages 用户头像
         * @param item 所在购物车商品信息
         */
        goToMerge(cropImages, item, fileName) {
            this.$store.commit('setMergeData', {
                ...item,
                cropImageURLs: cropImages.map(({ file_url }) => file_url),
                fileName,
            });
            this.$router.push({ path: '/merge-0' });
        },

        async getCropList() {
            this.isLoading = true;
            const query = new AV.Query('OrderImage');
            // 检查是否上传过图片
            query.limit(1000);
            // query.equalTo('item_id', 6158316863552);
            const row = await query.find();
            this.cropList = row.map((item) => item.toJSON());
            this.isLoading = false;
        },

        /**
         * 上传
         * @param item_id 产品在购物车中的id
         * @param isChange 本次是否是重新上传动作
         * @param e 原生上传事件对象
         */
        async onFileChange(item_id, e) {
            this.isLoading = true;
            const fileObj = new AV.File(`${item_id}.png`, e.target.files[0]);
            const file = await fileObj.save();
            const query = new AV.Query('OrderImage');
            // 检查是否上传过图片
            query.equalTo('item_id', item_id);
            const row = await query.find();
            // 添加
            const todo = new AV.Object('OrderImage');
            todo.set('item_id', item_id);
            todo.set('file_id', file.id);
            todo.set('file_url', file.toJSON().url);
            await todo.save();
            this.getCropList();
        },

        /**
         * 删除裁剪后的图片
         * @param row
         */
        removeCropImage(row) {
            this.$Modal.confirm({
                title: '是否删除?',
                onOk: async () => {
                    const todo = AV.Object.createWithoutData('OrderImage', row.objectId);
                    await todo.destroy();
                    this.getCropList();
                },
            });
        },
    },
};
</script>

<style scoped lang="scss">
$row-height: 140px;

.header {
    position: fixed;
    display: flex;
    z-index: 2;
    top: 0;
    left: 0;
    padding: 16px;
    box-shadow: 0 1px 5px rgba(#000, 0.2);
    background: rgba(#fff, 0.9);
    width: 100%;
}

.orders {
    margin-top: 48px;
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

            &__crop-image {
                text-align: center;
                margin-left: 16px;
                height: $row-height - 30px;
                width: $row-height;
                > img {
                    height: 100%;
                    display: block;
                }
                &__button-remove {
                    font-size: 12px;
                    display: inline-block;
                    margin-top: 4px;
                    padding: 4px;
                    text-align: center;
                    background: crimson;
                    border-radius: 4px;
                    color: #fff;
                    cursor: pointer;
                }
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
