var evensAndOdds = {}
module.exports = {
    beforeEach: browser => {
        evensAndOddsPage = browser.page.evensAndOdds(),
            evensAndOddsPage.navigate()
    },


    after: browser => {
        evensAndOddsPage.end()
    },
    'filterObjects': browser =>{
        evensAndOddsPage
        .assert.containsText('@filterObject', 'Filter Object')
        .setValue('@filterObjectInput', 'name')
        .click('@filterObjectSubmit')
        .assert.containsText('@filterObjectResults', 'name')
},
    'Null': browser =>{
        evensAndOddsPage
        .assert.containsText('@filterObject', 'Filter Object')
        .setValue('@filterObjectInput', 'kevin')
        .click('@filterObjectSubmit')
        .assert.containsText('@filterObjectResults', '')




    }


    }

