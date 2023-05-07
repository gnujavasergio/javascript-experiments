const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
console.log(orders);

const totales = orders.map(item => item.total);
console.log(totales);

const ordenes = orders.map(item => {
    // Siempre devolver con el spread operator porque sino modificara al array original
    return {
        ...item,
        tax: 0.19
    }
});
console.log(ordenes);