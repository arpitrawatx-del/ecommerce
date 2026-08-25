export function calculateTotal(items, selector = (item) => item.price * item.quantity) {
    return items.reduce((total, item) => total + selector(item), 0);
}

export default calculateTotal;
