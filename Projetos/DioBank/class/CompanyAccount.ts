import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan= (loan: number): void => {
        if(this.validateStatus()){
            let balance = this.getBalance();
            this.setBalance(balance + loan );
            console.log("Você pegou um empréstimo");
        }
    }


}