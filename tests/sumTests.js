var evensAndOdds = {}
module.exports = {
    beforeEach: browser => {
        evensAndOddsPage = browser.page.evensAndOdds(),
            evensAndOddsPage.navigate()
    },


    after: browser => {
        evensAndOddsPage.end()
    },
    'sum': browser =>{
        evensAndOddsPage
        .assert.containsText('@sum', 'Sum')
            .setValue('@sumInput1', '2')
            .setValue('@sumInput2', '4')
            .click('@sumSubmit')
            .assert.containsText('@sumResults', '6')
},



    }







