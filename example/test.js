const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { k, p } = require('./test.config');

axios.get(`https://${k}:${p}@better100.myshopify.com/admin/api/2020-10/orders.json`, {
}).then(({ data }) => {
    const orders2 = [];
    data.orders.forEach(order => {
        const { updated_at, landing_site, total_price, name, email, line_items, financial_status, shipping_address } = order;
        if ('refunded' === financial_status) return;
        const items = [];
        let totalQuantity = 0;
        line_items.forEach(item => {
            const { id, properties, variant_title, sku, quantity, title } = item;
            totalQuantity += quantity;
            if (properties.length == 1 && properties[0].value) {
                items.push({
                    id,
                    quantity, title, sku, variant_title,
                    image: properties[0].value
                });
            };
        });
        orders2.push({ name, shipping_address, email, items, totalQuantity, updated_at, total_price });
    });
    fs.writeFileSync(path.resolve(__dirname, 'order.json'), JSON.stringify(orders2, null, 4))
});