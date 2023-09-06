import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^I am on google page$/, async function () {
  console.log("Before test");
  await browser.url("https://www.google.com");
  await browser.maximizeWindow();
  let cookie = await $(`div=Reject all`);
  cookie.click();
  await browser.pause(1000);
  console.log("After test");
});

When(/^search with (.*)$/, async function (input) {
  console.log(">> SearchItem : ${input}");
  let searchBox = await $(`[title=Search]`);
  await searchBox.setValue(input);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let firstLink = await $(`<h3>`);
  firstLink.click();
});

Then(/^URL should match (.*)$/, async function (featureUrl) {
  console.log(">> expectedUrl : ${featureUrl}");
  let url = await browser.getUrl();
  chai.expect(url).to.equal(featureUrl);
});
