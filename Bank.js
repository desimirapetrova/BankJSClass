class Bank{
    constructor(bankName){
        this.bankName=bankName;
        this.allCustomers=[];
    }
    newCustomer(customer){
        this.allCustomers.find((c)=>{
        if(c.personalId===customer.personalId){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
    });
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney (personalId, amount){
        let id=this.allCustomers.find((id)=>{
           return id.personalId===personalId;
        }    );
        if(id===undefined){
            throw new Error('We have no customer with this ID!');
        }else{
            if(isNaN(id.totalMoney)){
                id.totalMoney=amount;
            }else{
        id.totalMoney+=amount;
        
        }}
        if(!Array.isArray(id.transactionInfos)){
            id.transactionInfos=[];
        }
        let message=`${id.transactionInfos.length+1}. ${id.firstName} ${id.lastName} made deposit of ${amount}$!`;
        id.transactionInfos.push(message);
        return `${id.totalMoney}$`;
    }
    withdrawMoney (personalId, amount){
        const id=this.allCustomers.find((id)=>{
            return id.personalId===personalId;
         }    );
         if(id===undefined){
             throw new Error('We have no customer with this ID!');
         }else{
            if(isNaN(id.totalMoney)){
                id.totalMoney=amount;
            }
            if(!Array.isArray(id.transactionInfos)){
                id.transactionInfos=[];
            }
            if(id.totalMoney<amount){
                throw new Error(`${id.firstName} ${id.lastName} does not have enough money to withdraw that amount!`)
            }else{
                id.totalMoney-=amount;

                let message=`${id.transactionInfos.length+1}. ${id.firstName} ${id.lastName} withdrew ${amount}$!`;
                id.transactionInfos.push(message);

                return `${id.totalMoney}$`
            }
        }
    }
    customerInfo (personalId){
        const id=this.allCustomers.find((id)=>{
            return id.personalId===personalId;
         });
         if(id===undefined){
             throw new Error('We have no customer with this ID!');
         }
         let info='';
         for (let index = id.transactionInfos.length - 1; index >= 0; index--) {
            info+= id.transactionInfos[index];
            if (index !== 0) {
                info += `\n`;
            }
        }
         return [`Bank name: ${this.bankName}`,
         `Customer name: ${id.firstName} ${id.lastName}`,
         `Customer ID: ${id.personalId}`,
         `Total Money: ${id.totalMoney}$`,
         `Transactions:`,
         info
        ].join('\n');


    }
}
