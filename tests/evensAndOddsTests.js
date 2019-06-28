var evensAndOdds = {}
module.exports = {
    beforeEach: browser => {
        evensAndOddsPage = browser.page.evensAndOdds(),
            evensAndOddsPage.navigate()
    },


    after: browser => {
        evensAndOddsPage.end()
    },
    'odd test': browser => {
        evensAndOddsPage
            .assert.containsText('@evensAndOdds', 'Evens and Odds')
            .setValue('@evensAndOddsInput', '1')
            .click('@evensAndOddsSubmit')
            .assert.containsText('@oddsResults', '1')
    },
    'even test': browser => {
        evensAndOddsPage
            .assert.containsText('@evensAndOdds', 'Evens and Odds')
            .setValue('@evensAndOddsInput', '2')
            .click('@evensAndOddsSubmit')
            .assert.containsText('@evensResults', '2')
    },
    'null test': browser => {
        evensAndOddsPage
            .assert.containsText('@evensAndOdds', 'Evens and Odds')
            .setValue('@evensAndOddsInput', 'abc')
            .click('@evensAndOddsSubmit')
            .verify.containsText('@oddsResults','null')



    }


} 