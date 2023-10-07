const depositExpense = require("../deposit-expense.js");

it('Given input is contain category character should return description', () => {
    const actual1 = depositExpense.getCategoryDesciption("175f")
    expect("food").toEqual(actual1)

    const actual2 = depositExpense.getCategoryDesciption("175t")
    expect("transportation").toEqual(actual2)

    const actual3 = depositExpense.getCategoryDesciption("175l")
    expect("lodging").toEqual(actual3)

    const actual4 = depositExpense.getCategoryDesciption("175m")
    expect("miscellaneous").toEqual(actual4)

    const actual5 = depositExpense.getCategoryDesciption("175i")
    expect("investment").toEqual(actual5)
})

// const spy = jest
// .spyOn(Date.prototype, "toLocaleDateString")
// .mockReturnValue("10/10/2566");
// let result = depositExpense.depostiExpense("", "");
// spy.mockRestore();
// expect("10/10/2566").toEqual(result);