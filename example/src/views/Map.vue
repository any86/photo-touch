<template>
    <article class="p-2">
        <Spin v-if="isLoading" fix size="large" style="position: fixed"></Spin>
        <BackTop></BackTop>

        <Card>
            <Form>
                <FormItem>
                    <input type="file" @change="onFileChange" />
                    <img :src="formData.url" height="100" />
                </FormItem>
                <FormItem label="sku">
                    <i-input v-model="formData.sku" />
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="save">保存</Button>
                </FormItem>
            </Form>
        </Card>

        <Table :columns="columns" border :data="tableData">
            <template slot-scope="{ row }" slot="url">
                <div style="height:50px;overflow:hidden;">
                    <img style="transform:rotate(90deg);transform-origin: 192%;" height="150px" :src="row.url" />
                </div>
            </template>

            <template slot-scope="{ row }" slot="action">
                <Button @click="remove(row.objectId)" type="error">删除</Button>
            </template>
        </Table>
    </article>
</template>

<script>
import AV from './lean';
export default {
    name: 'Map',

    data() {
        return {
            isLoading: true,
            tableData: [],
            columns: [
                {
                    title: 'sku',
                    key: 'sku',
                },
                {
                    title: 'fileName',
                    key: 'fileName',
                },
                {
                    slot: 'url',
                    title: 'url',
                },
                {
                    title: '操作',
                    slot: 'action',
                },
            ],
            formData: {
                sku: '',
                url: '',
                fileName:'',
            },
        };
    },

    computed: {},

    async mounted() {
        await this.getList();
    },

    methods: {
        async remove(objectId) {
            this.isLoading = true;
            const todo = AV.Object.createWithoutData('BackgroundImageMap', objectId);
            await todo.destroy();
            await this.getList();
            this.isLoading = false;
        },
        /**
         * 上传
         */
        async onFileChange(e) {
            this.isLoading = true;
            const file = e.target.files[0];
            const fileObj = new AV.File(`${file.name}.png`, file);
            const tmp = file.name.split('-') 
            this.formData.fileName = file.name;
            this.formData.sku = tmp.length > 1? tmp[0].split('_')[0] + tmp[0].split('_')[1]: tmp[0];
            const f = await fileObj.save();
            this.formData.url = f.toJSON().url;
            this.isLoading = false;
        },

        async save() {
            this.isLoading = true;
            const todo = new AV.Object('BackgroundImageMap');
            const { sku, url ,fileName} = this.formData;
            todo.set('sku', sku);
            todo.set('url', url);
            todo.set('fileName', fileName);
            await todo.save();
            this.isLoading = false;
            this.getList();
        },

        async getList() {
            this.isLoading = true;
            const query = new AV.Query('BackgroundImageMap');
            const row = await query.find();
            this.tableData = row.map((item) => item.toJSON());
            this.isLoading = false;
        },
    },
};
</script>

<style scoped lang="scss">
</style>
