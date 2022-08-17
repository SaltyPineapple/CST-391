export class CalculatorModel {
    public operator: string = "";
    public operand1: string = "";
    public operand2: string = "";
    public result: number;
    
    constructor(operator:string, operand1:string, operand2:string, result:number)
    {
        this.operator = operator;
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.result = result;
    }

    get Operator():string
    {
        return this.operator;
    }
    set Operator(operator:string)
    {
        this.operator = operator;
    }

    get Operand1():string
    {
        return this.operand1;
    }
    set Operand1(operand1:string)
    {
        this.operand1 = operand1;
    }

    get Operand2():string
    {
        return this.operand2;
    }
    set Operand2(operand2:string)
    {
        this.operand2 = operand2;
    }

    get Result():number
    {
        return this.result;
    }
    set Result(result:number)
    {
        this.result = result;
    }

}