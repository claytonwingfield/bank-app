'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Clayton Wingfield',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(int, arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts); // Should be stw

//Event handles
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI & Welcome
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display movements
    displayMovements(currentAccount.movements);
    //Display balance
    calcDisplayBalance(currentAccount);
    //Display summary
    calcDisplaySummary(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  // if(amount > 0 && ){

  // }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// let beg = arr.slice(2);
// console.log(beg);
// console.log(arr.slice(0, 1));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE (Changes og array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// arr.splice(1, 2);
// console.log(arr);

//REVERSE Affects OG array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN TURNS INTO A STRING
// console.log(letters.join(' - '));

//AT Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Getting last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('clayton'.at(0));

// FOR OF FIRST IS INDEX, SECOND IS ELEMENT
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You deposted  ${movement}`);
//   } else {
//     console.log(`You removed ${Math.abs(movement)}`);
//   }
// }

//FOREACH FIRST IS ELEMENT, SECOND INDEX, THRID ARR
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`${i}: You deposted ${mov} `);
//   } else {
//     console.log(`${i}: You withdrew ${Math.abs(mov)} `);
//   }
// });

//0: function(200)
// 1: fumction(450)
// 2: function (400)
// ...

// // FOR EACH VALUE, KEY, MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//SET
// const currenciesUniquie = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// // console.log(currenciesUniquie);
// currenciesUniquie.forEach(function (value) {
//   console.log(`${value}: ${value}`);
// });
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movmentsUSD = movements.map(function (mov) {
//   return Math.trunc(mov * eurToUsd);
// });
// const movmentsUSD = movements.map(mov => Math.trunc(mov * eurToUsd));

// console.log(movements);
// console.log(movmentsUSD);

// const movementsUSDFor = [];

// for (const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd);
// }
// console.log(movementsUSDFor);

// const movmementDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposted' : 'withdrew'} ${Math.abs(
//       mov
//     )} `
// );
// console.log(movmementDesc);

//if (mov > 0) {
//     console.log(`${i}: You deposted ${mov} `);
//   } else {
//     console.log(`${i}: You withdrew ${Math.abs(mov)} `);
//   }
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawls = movements.filter(mov => mov < 0);

// console.log(withdrawls);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
//Accumulator is like a nowball
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(acc);
//   return acc + curr;
// }, 100);
// console.log(balance);

// const balance = movements.reduce((acc, curr, i, arr) => {
//   console.log(acc);
//   return acc + curr;
// }, 0);
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

//Get max value
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const highestBalance = movements.reduce(function (acc, curr) {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// }, movements[0]);
// console.log(highestBalance);
// const eurToUsd = 1.1;
// console.log(movements);

// //Pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// // console.log(account);

// for (const acc of accounts) {
//   // console.log(acc);
//   const findPerson = acc.owner;
//   console.log(findPerson);

//   // const findPerson = acc.map(person => person === 'Jessica Davis');
//   // console.log(findPerson);
// }
