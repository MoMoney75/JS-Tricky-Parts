function createAccount(pin, amount = 0) {
this.pin = pin;
this.amount = amount;

 createAccount.prototype.checkBalance = function(pin){
    if(pin === this.pin){
        return this.amount;
    }

    else{
        return "Invalid PIN"
    }
 }

 createAccount.prototype.deposit = function(amount,pin){
    if(pin === this.pin){
        const total = this.amount +  amount;
        return total;
    }

    else{
        return "Invalid PIN"
    }
 }

 createAccount.prototype.withdraw = function(amount,pin){
    if(pin === this.pin){
        const total = this.amount - amount;
        return total;
    }

    else{
        return "Invalid PIN"
    }
 }

 createAccount.prototype.changePin = function(newPin, oldPin){
    if(oldPin === this.pin){
        this.pin = newPin;
    }

    else{
        return "Invalid PIN"
    }
 }
 }


module.exports = { createAccount };
