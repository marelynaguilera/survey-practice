import { Given, When, Then } from '@cucumber/cucumber';

import SurveyPage from '../pageobjects/survey.page';

Given(/^I access the VV Test page$/, async () => {
    await SurveyPage.openHome()
});

Given(/^I access menu 'Survey - QA'$/, async () => {
    await SurveyPage.openSurveyPage()
});

When(/^I fill in all required fields:$/, async (data) => {

    const hashes = data.hashes();
    for (let row of hashes) {
        const contents = await SurveyPage.sendSurvey(row);
      }
});

Then(/^It should redirect to a success page$/, async () => {
    await SurveyPage.checkSuccessPage()
});

