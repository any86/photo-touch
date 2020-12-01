<template>
    <article>
        <BackTop>{{ r }}</BackTop>

        <Table :data="list" stripe :columns="columns"></Table>
    </article>
</template>

<script>
const ORDERS = require('../../order.json');
import dayjs from 'dayjs';
export default {
    name: 'TableView',

    data() {
        return {
            r: 0,
            columns: [
                {
                    title: '订单号',
                    key: 'orderName',
                },
                {
                    title: '姓名',
                    key: 'name',
                },
                {
                    title: '地址',
                    width: 260,
                    render: (h, { row }) => h('span', [h('p', row.address1), h('p', row.address2)]),
                },
                {
                    title: '城市',
                    key: 'city',
                },
                {
                    title: '省州(缩写)',
                    key: 'province_code',
                },
                {
                    title: '邮编',
                    key: 'zip',
                },
                {
                    title: '电话',
                    key: 'phone',
                },
                {
                    title: '邮箱',
                    key: 'email',
                },
                {
                    title: '总数',
                    render: (h, { row }) =>
                        h(
                            'b',
                            { class: ['font-2', 1 < row.totalQuantity ? 'text-danger' : 'text-dark'] },
                            row.totalQuantity
                        ),
                },
                {
                    title: '剩余',
                    render: (h, { row }) => {
                        return h('span', this.calc(row));
                    },
                },
                {
                    title: '更新日期',
                    render: (h, { row }) => h('span', dayjs(row.updated_at).locale('zh-cn').format('YYYY-MM-DD hh:mm')),
                },
            ],
        };
    },

    computed: {
        list() {
            const list = [];
            this.r = 0;
            ORDERS.forEach(({ name, email, totalQuantity, updated_at, total_price, shipping_address }) => {
                // const { name, address1, address2,province_code,city,zip,phone } = shipping_address;
                this.r += this.calc({ totalQuantity, total_price });
                list.push({ orderName: name, email, totalQuantity, total_price, updated_at, ...shipping_address });
            });
            return list;
        },
    },

    methods: {
        calc(row) {
            const p1 = 35 + (row.totalQuantity - 1) * 10;
            const r = row.total_price * 6.5 * 0.92 - p1 - row.totalQuantity * 10;
            return Math.round(r) - 65;
        },
    },
};
</script>

<style scoped lang="scss">
</style>
