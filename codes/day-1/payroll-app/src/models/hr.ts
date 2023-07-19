import { Employee } from "./employee";

export class Hr extends Employee {

    incentivePay: number;

    constructor(name: string, id: number, basicPay: number, daPay: number, hraPay: number, incentivePay: number) {
        super(name, id, basicPay, daPay, hraPay)
        this.incentivePay = incentivePay;
    }

    calculateSalary(): number {
        return super.calculateSalary() + this.incentivePay;
    }
}