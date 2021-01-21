var { Given, When, Then, BeforeAll, AfterAll, Before, After } = require('cucumber');
var { Builder, By, Key, until } = require('selenium-webdriver');
var assert = require('assert');
var webdriver = require('selenium-webdriver')
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

async function waitForUrlToChangeTo(URL) {
    let urlIsChangedTo = async () => (await driver.getCurrentUrl()) == URL
    return driver.wait(urlIsChangedTo, 10000, `Expected URL to be changed to ${URL} in 10 seconds, but it wasn't`)
}

Before({ timeout: 60 * 1000 }, async function () {

    await driver.get('http://localhost:3000');
    await driver.manage().window().maximize();
    console.log('user is on ' + await driver.getCurrentUrl());
});

Given('login by user is {string} and password is {string}', function (username, password) {
    usernameinput = driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div[1]/div[2]/div/div[1]/input'));
    usernameinput.sendKeys(username);
    passwordinput = driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div/div[1]/input'));
    passwordinput.sendKeys(password);
});

When('user click on login button', function () {
    driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/button')).click();
});

Then('user is on homepage', async function () {
    await waitForUrlToChangeTo("http://localhost:3000/app/home")
    console.log('user is on ' + await driver.getCurrentUrl());
    assert.equal(await driver.getCurrentUrl(), "http://localhost:3000/app/home");
});


When('user click on create appointment button', function () {
    driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/div/div/div[2]/div/ul/ul/li[2]/a')).click();
});

Then('user is on createappointment page', async function () {
    await waitForUrlToChangeTo("http://localhost:3000/app/createappointment")
    console.log('user is on ' + await driver.getCurrentUrl());
    assert.equal(await driver.getCurrentUrl(), "http://localhost:3000/app/createappointment");
});

Given('user input topic as {string}', function (string) {
    driver.sleep(1000).then(function () {
        kiki=driver.findElement(By.xpath("//*[contains(@id,'topic')]"));
        kiki.click();
        //driver.findElement(By.xpath('//*/div[@class="dx-item-content dx-list-item-content"][contains(text(),"' + string + '")]/parent::*')).click();;
        //timeisSelect.click();
        //kiki.sendKeys(webdriver.Key.ARROW_DOWN);
        kiki.findElement(By.xpath('//*/div[@class="dx-item-content dx-list-item-content"][contains(text(),"อื่นๆ")]/parent::*')).click();
    });
    //driver.sleep(1000).then(function() {
    //driver.findElement(By.xpath("//*[contains(@id,'topic')]")).click();

    //timeisSelect.click();
    // });
    // driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/div[2]/div/div/div[1]/div[1]/div[1]/div/div/div/div/div[1]/div/div/div/div')).click();
});

// Given('user input date as {string}',function (date) {
//     dateinput = driver.findElement(By.xpath("//*[contains(@id,'date')]"));
//     dateinput.sendKeys(date);
// });

// Given('user input time as {string}', async function (time) {
//     let timeSelect = driver.findElement(By.xpath("//*[contains(@id,'timing_period')]"));
//     await timeSelect.click();
//     let timeisSelect = driver.findElement(By.xpath('//*[contains(text(),' + time + ')]'));
//     await timeisSelect.click();
// });

// Given('user input detail as {string}', async function (detail) {
//     let detailinput = driver.findElement(By.xpath("//*[contains(@id,'description')]"));
//     await detailinput.sendKeys(detail);
// });

// Given('user input type of product as {string}', async function (type) {
//     let typeSelect = driver.findElement(By.xpath("//*[contains(@id,'product_groups_id')]"));
//     await typeSelect.click();
//     let typeisSelect = driver.findElement(By.xpath('//*[contains(text(),' + type + ')]'));
//     await typeisSelect.click();
// });

// Given('user input dealer as {string}', async function (dealer) {
//     let dealerisSelect = driver.findElement(By.xpath('//*[contains(text(),' + dealer + ')]'));
//     await dealerisSelect.click();
// });

