/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from './libs/test.js'

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from 'lodash'
const source = $t.source(1)
$t.answer(1, async () => {
  // Your code goes here
  

  const sourceData = [
    {
      category: 'Restaurants',
      description: 'Burger King',
      amount: 26800,
      type: 'expense'
    },
    {
      category: 'Restaurants',
      description: 'Pan Pa Ya',
      amount: 16800,
      type: 'expense'
    },
    {
      category: 'Income',
      description: 'Freelance Project 1',
      amount: 1200000,
      type: 'income'
    },
    {
      category: 'Income',
      description: 'Freelance Project 2',
      amount: 1750000,
      type: 'income'
    },
    {
      category: 'Income',
      description: 'Freelance Project 3',
      amount: 950000,
      type: 'income'
    },
    {
      category: 'Groceries',
      description: 'Exito',
      amount: 250000,
      type: 'expense'
    },
    {
      category: 'Rent',
      description: 'Rent',
      amount: 2000000,
      type: 'expense'
    }
  ];

  const targetData = {
    balance: 0,
    income: 0,
    expenses: 0,
    byCategories: {}
  };

  sourceData.forEach(e => {
    if (e.type === 'income') {
      targetData.income += e.amount;
       } else {
      targetData.expenses += e.amount;
       }
  
    if (!targetData.byCategories[e.category]) {
      targetData.byCategories[e.category] = 0;
    }
  
    targetData.byCategories[e.category] +=
    e.type === 'income' ? e.amount : -e.amount;
  });
  
  targetData.balance = targetData.income - targetData.expenses;

  return targetData;

})

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2)
$t.answer(2, async () => {
    // Your code goes here:
    // 1. Get ids: $source.getIds()
    // 2. Get text for every id: $source.getText(id)
    // 3. Return array of texts

 const ids = await $source.getIds();
    const textPromises = ids.map(id => $source.getText(id));
    const texts = await Promise.all(textPromises);
    return texts;
})