const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

Given('I am in student registration page', async function () {
    await driver.get('https://www.google.co.th/?hl=th')
        ;

});

When('I enter registered student ID', async function () {
    //await driver.findElements(By.xpath('//*/input[@name="q"]')).sendKeys('Webdriver');
    // Get search box element from webElement 'q' using Find Element
    let searchBar = driver.findElement(By.name('q'));

    //Perform action using WebElement
    
    await searchBar.sendKeys('Webdriver');
    await searchBar.sendKeys(Key.ENTER);
});

When('click Register Button', async function () {
    await driver.findElements(By.xpath('//*/input[@name="btnK"]'));
});

Then('I should see message "This student is already registered!"', async function () {
});

