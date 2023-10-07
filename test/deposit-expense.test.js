const depositExpense  = require("../deposit-expense.js");

it('Given input is contain category character should return description', () => {
    let actual1 = depositExpense.getCategoryDesciption("175f")
    expect("food").toEqual(actual1)

    let actual2 = depositExpense.getCategoryDesciption("175t")
    expect("transportation").toEqual(actual2)

    let actual3 = depositExpense.getCategoryDesciption("175l")
    expect("lodging").toEqual(actual3)

    let actual4 = depositExpense.getCategoryDesciption("175m")
    expect("miscellaneous").toEqual(actual4)

    let actual5 = depositExpense.getCategoryDesciption("175i")
    expect("investment").toEqual(actual5)
})