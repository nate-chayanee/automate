const { Given, When, Then, BeforeAll, AfterAll, Before, After } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();


Before({timeout: 60 * 1000}, async function(){  
    //Manage to open the url and wait for certain timeout  
    console.log("Inside Before method"); 
     await driver.get('http://localhost:3000');
});  
  
Given('I am in student registration page', async function () {
    
    


});

When('I enter registered student ID', async function () {
    //await driver.findElements(By.xpath('//*/input[@name="q"]')).sendKeys('Webdriver');
    // Get search box element from webElement 'q' using Find Element
   // let searchBar = driver.findElement(By.name('q'));

    //Perform action using WebElement
    
    //await searchBar.sendKeys('Webdriver');
    //await searchBar.sendKeys(Key.ENTER);
});

When('click Register Button', async function () {
   // await driver.findElements(By.xpath('//*/input[@name="btnK"]'));
});

Then('I should see message "This student is already registered!"', async function () {
});

