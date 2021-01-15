const { Given, When, Then, BeforeAll, AfterAll, Before, After } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();


Before({ timeout: 60 * 1000 }, async function () {
    await driver.get('http://localhost:3000');
    console.log('user is on ' + await driver.getCurrentUrl());
});

Given('login by user is {string} and password is {string}', async function (username, password) {
    let usernameinput = driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div[1]/div[2]/div/div[1]/input'));
    await usernameinput.sendKeys(username);
    let passwordinput = driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div/div[1]/input'));
    await passwordinput.sendKeys(password);
});

When('user click on login button', async function () {
    await (await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/button'))).click();
});

Then('user is on homepage', async function () {
    await waitForUrlToChangeTo("http://localhost:3000/app/home")
    console.log('user is on ' + await driver.getCurrentUrl());
    assert.equal(await driver.getCurrentUrl(),"http://localhost:3000/app/home");
});


When('user click on create appointment button',async function () {
    await (await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/div/div/div[2]/div/ul/ul/li[2]/a'))).click();
});

Then('user is on createappointment page',async function () {
    await waitForUrlToChangeTo("http://localhost:3000/app/createappointment")
    console.log('user is on ' + await driver.getCurrentUrl());
    assert.equal(await driver.getCurrentUrl(),"http://localhost:3000/app/createappointment");
});

Given('user input topic as {string}',async function (topic) {
    let topicSelect = driver.findElement(By.xpath("//*[contains(@id,'topic')]"));
    await topicSelect.click();
    //let topicisSelect = driver.findElement(By.xpath('//*[@id="dx-ce311756-dddf-9971-682a-7b0b7aff5b54"]//div[@role="option"]/div[contains(text(),'+topic+')]'));
    //await topicisSelect.click();
});

async function waitForUrlToChangeTo(URL) {
    let urlIsChangedTo = async () => (await driver.getCurrentUrl()) == URL
    return driver.wait(urlIsChangedTo, 10000, `Expected URL to be changed to ${URL} in 10 seconds, but it wasn't`)
}