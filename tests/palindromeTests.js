var evensAndOdds = {}
module.exports = {
    beforeEach: browser => {
        evensAndOddsPage = browser.page.evensAndOdds(),
            evensAndOddsPage.navigate()
    },


    after: browser => {
        evensAndOddsPage.end()
    },
    'palindrome': browser =>{
        evensAndOddsPage
        .assert.containsText('@palindrome', 'Palindrome')
            .setValue('@palindromeInput', 'hannah')
            .click('@palindromeSubmit')
            .assert.containsText('@palindromeResults', 'true')
},
      'Null' : browser => {
        evensAndOddsPage
        .assert.containsText('@palindrome', 'Palindrome')
            .setValue('@palindromeInput', 'Tom')
            .click('@palindromeSubmit')
            .assert.containsText('@palindromeResults', '')
   }



    
}