export class Employee {
    name: string;
    id: number;
    basicPay: number;
    daPay: number;
    hraPay: number;

    constructor(name: string, id: number, basicPay: number, daPay: number, hraPay: number) {
        this.name = name;
        this.id = id;
        this.basicPay = basicPay;
        this.daPay = daPay;
        this.hraPay = hraPay;
    }

    calculateSalary(): number {
        return this.basicPay + this.daPay + this.hraPay;
    }
}