// Спроектируйте класс Billing со свойством amount и 
// методом calculateTotal для расчёта счёта. 
// Сделайте разный calculateTotal для разных типов:

// fixBilling - где нужно вернуть amount как результат
// hourBilling - который считает amount * число часов
// itemBilling где считается amount * число элементов
// Соблюдайте принцип открытости / закрытости!

class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
       throw new Error("Метод calculateTotal() должен быть переопределен в подклассе!");
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }
    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }       
    calculateTotal(){
        return this.amount * this.items;
    }
}

const invoices = [
    new FixBilling(1000),
    new HourBilling(50, 8),
    new ItemBilling(20, 5)
];

const totalAmount = invoices.reduce((total, invoice) => total + invoice.calculateTotal(), 0);

invoices.forEach((invoice, index) => {
    console.log(`Счёт ${index + 1}: ${invoice.calculateTotal()} руб.`);
});
console.log(`Итоговая сумма по всем счетам: ${totalAmount} руб.`);