const totalPrice = ({ price, discount, isInstallment, months } : {price: number, discount: number, isInstallment: boolean, months: number}): number => {
  const disc:number = price - ((price / 100) * discount);
  return isInstallment ? disc / months: disc;
}

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250