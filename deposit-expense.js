module.exports = {
    getCategoryDesciption
}

const category = {
    "t": "transportation",
    "f": "food",
    "l": "lodging",
    "m": "miscellaneous",
    "i": "investment",
}

function depostiExpense(input) {
    const lettersPattern = /[a-zA-Z]/g;
    const numberPattern = /[0-9]/g;
    var letter = input.match(lettersPattern);
    var amount = input.match(numberPattern);
    let desciption = getCategoryDesciption(letter)

}

function getCategoryDesciption(input) {
    const lettersPattern = /[a-zA-Z]/g;
    var letter = input.match(lettersPattern);

    return category[letter]
}