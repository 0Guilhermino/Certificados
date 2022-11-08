import { CompanyAccount } from "./class/CompanyAccount";
import { peopleAccount } from "./class/peopleAccount";

const peopleAccount01: peopleAccount = new peopleAccount(1, "Angelo",12);
console.log(peopleAccount01);
peopleAccount01.deposit(500);
console.log(`Seu saldo é de ${peopleAccount01.getBalance()}`);
peopleAccount01.withdraw(600);
console.log(`Seu saldo é de ${peopleAccount01.getBalance()}`);


const companyAccount: CompanyAccount = new CompanyAccount("Angelo",2,);
companyAccount.deposit(500);
console.log(`Seu saldo é de ${companyAccount.getBalance()}`);
companyAccount.getLoan(1000);
console.log(`Seu saldo é de ${companyAccount.getBalance()}`);




