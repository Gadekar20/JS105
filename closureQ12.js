function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    }
  };
}

let account = createBankAccount(100);
console.log(account.getBalance());  // Output: 100
console.log(account.deposit(50));   // Output: 150
