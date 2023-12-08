/*
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a complex and sophisticated JavaScript program that simulates a virtual bank.
 */

// Bank class to hold account and transaction details
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
    this.transactions = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getAccountById(accountId) {
    return this.accounts.find(account => account.id === accountId);
  }

  getTransactionsByAccountId(accountId) {
    return this.transactions.filter(transaction => transaction.from === accountId || transaction.to === accountId);
  }

  getTotalBalance() {
    return this.accounts.reduce((total, account) => total + account.balance, 0);
  }
}

// Account class to hold account details and perform account related operations
class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}

// Transaction class to hold transaction details
class Transaction {
  constructor(from, to, amount, type) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.date = new Date();
    this.type = type;
  }
}

// Create a new bank
const myBank = new Bank("My Bank");

// Create accounts
const account1 = new Account(1, "John Doe", 1000);
const account2 = new Account(2, "Jane Smith", 500);
const account3 = new Account(3, "Bob Johnson", 2000);

// Add accounts to the bank
myBank.addAccount(account1);
myBank.addAccount(account2);
myBank.addAccount(account3);

// Perform transactions
account1.withdraw(200);
account2.deposit(500);
account3.withdraw(1000);

// Add transactions to the bank
myBank.addTransaction(new Transaction(account1.id, account2.id, 200, "Transfer"));
myBank.addTransaction(new Transaction(account2.id, account1.id, 500, "Transfer"));
myBank.addTransaction(new Transaction(account3.id, account1.id, 1000, "Transfer"));

// Display account details and transactions
console.log("Account Details:");
console.log("----------------");
console.log(`Account ID: ${account1.id}, Name: ${account1.name}, Balance: ${account1.balance}`);
console.log(`Account ID: ${account2.id}, Name: ${account2.name}, Balance: ${account2.balance}`);
console.log(`Account ID: ${account3.id}, Name: ${account3.name}, Balance: ${account3.balance}`);
console.log("");

console.log("Transactions:");
console.log("-------------");
myBank.getTransactionsByAccountId(account1.id).forEach(transaction => {
  console.log(`Type: ${transaction.type}, From: ${transaction.from}, To: ${transaction.to}, Amount: ${transaction.amount}, Date: ${transaction.date}`);
});

console.log("");
console.log(`Total Balance in the Bank: ${myBank.getTotalBalance()}`);
