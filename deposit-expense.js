module.exports = {
    getCategoryDesciption,
    depostiExpense
}

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

const category = {
    "t": "transportation",
    "f": "food",
    "l": "lodging",
    "m": "miscellaneous",
    "i": "investment",
}

function depostiExpense(amountStr, note) {
    const numberPattern = /[0-9]/g;
    var amount = amountStr.match(numberPattern);
    let desciption = getCategoryDesciption(amountStr)
    let date = new Date().toLocaleDateString('th-TH')
    updateDb()
}

function getCategoryDesciption(input) {
    const lettersPattern = /[a-zA-Z]/g;
    var letter = input.match(lettersPattern);

    return category[letter]
}

async function updateDb(request, response) {
    const pageId = process.env.NOTION_PAGE_ID;
    const title = "DepositExpense";
  
    try {
          const newDb = await notion.databases.create({
            parent: {
              type: "page_id",
              page_id: pageId,
            },
            title: [
              {
                type: "text",
                text: {
                  content: title,
                },
              },
            ],
            properties: {
              Price: {
                title: {},
              }
            },
          });
          // response.json({ message: "success!", data: newDb });
          console.log("Success")
        } catch (error) {
          console.log(error)
          // response.json({ message: "error", error });
        }
  }