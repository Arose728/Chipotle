/*
chipotle order online
*/


module.exports = {
  'open chipotle.com' : function (client) {

    // init WebdriverJS
    var client = require('webdriverjs')
    // init WebdriverCSS
    require('webdrivercss').init(client);

    client
      .init()
      .url('https://chipotle.com/')
      //.maximizeWindow()
      .url(function(result){
        console.log(result);
      })
      .waitForElementPresent('body', 2000)
      .saveScreenshot('./screenshots/screenshot1.png')
      .useXpath()
      .click('/html/body/header/div[1]/div/nav[3]/ul/li[3]/a/span')
      .useCss()
      .waitForElementPresent('body', 2000)
      .saveScreenshot('./screenshots/screenshot2.png')

      .webdrivercss('header',{
        elem: '#header',
        screenWidth: [320, 480]
      })

      
  },

  'find your chipotle' : function(client) {
    client
      .window_handles(function(result) {
          client.assert.equal(result.value.length, 2, 'There should be two windows open.');
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

  },

  'order' : function(client) {
    client
      .useXpath()
      //.click('#Burrito bowl')
      //.click('button[name=burrio bowl]')
      .click('/html/body/div/div/cmg-order-entree/div/div[3]/cmg-entrees/div/div[1]/div[2]/div/a/cmg-entree-tile')
      //.waitForElementPresent('body', 3000)
      .pause(2000)
            .url(function(result){
        console.log("Meat?")
      })
      .click('//*[@id="carnitas"]')
      //.pause(2000)
      .url(function(result){
        console.log("Rice?")
      })
      .click('//*[@id="ricebrown"]')
      .url(function(result){
        console.log("Beans?")
      })
      .click('//*[@id="beansblack"]')
      .url(function(result){
        console.log("Want guac?")
      })
      .click('//*[@id="guactopping"]')
      .url(function(result){
        console.log("I know it costs extra!")
        console.log("Extras?")
      })
      .click('//*[@id="salsacorn"]')

      .click('//*[@id="salsagreenchili"]')

      .click('//*[@id="cheese"]')

      .click('//*[@id="lettuce"]')

      .click('//*[@id="chipsandguacamole"]')

      .click('//*[@id="sodalarge"]')
      .url(function(result){
        console.log("add to bag")
      })
      .click('//*[@id="next"]')
  },

  'special instructions': function(client) {
    client
      .click('//*[@id="bag-container"]')
      //.click('//*[@id="bag-container"]/div[4]/div[2]/div[2]/div/div/cmg-meal-summary/div/div[1]/div[1]/a')
      .useCss()
      .setValue('input[type=text]', ['Alex Rose'])

  //.end();
  }
};
