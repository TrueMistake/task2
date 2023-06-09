var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var disc = price - ((price / 100) * discount);
    return isInstallment ? disc / months : disc;
};
totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250
