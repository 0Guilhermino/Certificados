export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber : number
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    deposit = (balance: number): void => {
        if(this.validateStatus()){
            this.balance += balance;
    console.log(`Olá, ${this.name} Depósito no valor de r$${balance} realizado com sucesso!`)
        }
    }

    withdraw = (withdraw: number): void => {
        if(this.validateStatus() && withdraw <= this.balance){
            this.balance -= withdraw;
            console.log(`Olá, ${this.name} Saque no valor de r$${withdraw} realizado com sucesso!`)
        } else console.log("Saldo insuficiente");
        
        
    }

    getBalance= (): number => this.balance;

    
    setBalance(balance: number): void{ 
        this.balance = balance;
    }

    validateStatus = (): boolean => {
        if(this.status){
            return this.status
        } else {throw Error();}
        
    }
    
}