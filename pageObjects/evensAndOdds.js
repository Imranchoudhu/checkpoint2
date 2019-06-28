module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evensAndOdds: {
            selector: '(//*[h4])[1]',
            locateStrategy: 'xpath'
        },
        filterObject: {
            selector: '(//*[h4])[2]',
            locateStrategy: 'xpath'
        },
        filterString: {
            selector: '(//*[h4])[3]',
            locateStrategy: 'xpath'
        },
        palindrome: {
            selector: '(//*[h4])[4]',
            locateStrategy: 'xpath'
        },
        sum: {
            selector: '(//*[h4])[5]',
            locateStrategy: 'xpath'
        },
        evensAndOddsInput: {
            selector: '(//*[@class="inputLine"])[1]',
            locateStrategy: 'xpath'
        },
        filterObjectInput: {
            selector: '(//*[@class="inputLine"])[2]',
            locateStrategy: 'xpath'
        },
        filterStringInput: {
            selector: '(//*[@class="inputLine"])[3]',
            locateStrategy: 'xpath'
        },
        palindromeInput: '[name="palindromeInput"]',
            
        
        sumInput1:'[name="sumInput1"]',
        sumInput2:'[name="sumInput2"]',
        evensAndOddsSubmit: {
            selector: '(//*[@class="confirmationButton"])[1]',
            locateStrategy: 'xpath'
        },
        filterObjectSubmit: '[name="objectFilterButton"]',
          
        
        filterStringSubmit: {
            selector: '(//*[@class="confirmationButton"])[3]',
            locateStrategy: 'xpath'
        },
        palindromeSubmit: {
            selector: '(//*[@class="confirmationButton"])[4]',
            locateStrategy: 'xpath'
        },
        sumSubmit: {
            selector: '(//*[@class="confirmationButton"])[5]',
            locateStrategy: 'xpath'
        },
        sumSubmitt2: {
            selector: '(//*[@class="confirmationButton"][6])',
            locateStrategy: 'xpath'
        },
        evensResults: {
            selector: '(//*[@class="resultsBox"])[1]',
            locateStrategy: 'xpath'
        },
        oddsResults: {
            selector: '(//*[@class="resultsBox"])[2]',
            locateStrategy: 'xpath'
        },
        filterObjectResults: '[name="objectFilterResults"]',
        filterStringResults: {
            selector: '(//*[@class="resultsBox filterStringRB"])',
            locateStrategy: 'xpath'

        },
        palindromeResults: {
            selector: '(//*[@class="resultsBox"])[3]',
            locateStrategy: 'xpath'
        },
        sumResults: {
            selector: '(//*[@class="resultsBox"])[4]',
            locateStrategy: 'xpath'
        },





    }

}
