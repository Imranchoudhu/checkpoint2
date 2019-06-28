var evensAndOdds = {}
module.exports = {
    beforeEach: browser => {
        evensAndOddsPage = browser.page.evensAndOdds(),
            evensAndOddsPage.navigate()
    },


    after: browser => {
        evensAndOddsPage.end()
    },
    'Filter String': browser => {
        evensAndOddsPage
        .assert.containsText('@filterString', 'Filter String')
        .setValue('@filterStringInput', 'Tyler')
        .click('@filterStringSubmit')
        .assert.containsText('@filterStringResults', 'Tyler')

 },
    'Null': browser => {
        evensAndOddsPage
        .assert.containsText('@filterString', 'Filter String')
        .setValue('@filterStringInput', 'Imran')
        .click('@filterStringSubmit')
        .assert.containsText('@filterStringResults', '')

 }









}