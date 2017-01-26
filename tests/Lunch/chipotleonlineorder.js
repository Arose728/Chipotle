/*
chipotle order online
*/

module.exports = {
  'open chipotle.com' : function (client) {
    client
      .url('https://chipotle.com/')
      //.maximizeWindow()
      .waitForElementPresent('body', 2000)
      .saveScreenshot('./screenshots/screenshot1.png')
      .useXpath()
      .click('/html/body/header/div[1]/div/nav[3]/ul/li[3]/a/span')
      .useCss()
      .waitForElementPresent('body', 2000)
      .saveScreenshot('./screenshots/screenshot2.png')
      
  },

  'find your chipotle' : function(client) {
    client
      .window_handles(function(result) {
          var handle = result.value[1];
          this.switchWindow(handle);
        })
      .waitForElementPresent('body', 3000)
      .pause(2000)
      .saveScreenshot('./screenshots/screenshot3.png')
      .useXpath()
      .setValue('/html/body/div/div/cmg-order-entree/div/div[1]/div/form/input', ['07110',])
      .useCss()
      .pause(1000)
      .saveScreenshot('./screenshots/screenshot4.png')
      .keys(client.Keys.ENTER)
      .pause(1000)
      .saveScreenshot('./screenshots/screenshot5.png')
  },

  'select Clifton' :function(client) {
    client
      //.click('id="817"')
      .useXpath()
      .click('//*[@id="817"]')
      //.assert.attributeContains("/html/body/div/div/cmg-order-entree/div/div[2]/div/div[1]", 'Clifton')
      //.assert.containsText("#main", "Clifton")
      //.assert.urlEquals('https://order.chipotle.com/?_ga=1.48495968.795510196.1485274896')
      .useCss()
      .end();
  },
/*
  'order' : function(client) {
    client
      .
      .click('#search-button')
      .pause(5000)
    
  }
  */

};
