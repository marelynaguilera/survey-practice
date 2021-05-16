import Page from './page';

class SurveyPage extends Page {
    
    get inputName() { return $('#nf-field-5') }
    get inputLastName() { return $('#nf-field-6') }
    get inputEmail() { return $('#nf-field-7') }
    get inputConfirmEmail() { return $('#nf-field-8') }
    get inputPhoneNumber() { return $('#nf-field-17') }
    get radioAge() { return $('#nf-label-class-field-10-1') }
    get selectTimeInQa() { return $('#nf-field-11') }
    get selectWhatYouLike() { return $('#nf-field-12') }
    get radioWhatToImprove() { return $('#nf-label-class-field-13-0') }
    get inputProgrammingLanguage() { return $('#nf-field-14') }
    get textCareerPlan() { return $('#nf-field-15') }
    get submitButton() { return $('#nf-field-16') }
    get successMessageLabel() { return $('//*[@id="nf-form-2-cont"]/div/div[1]/p') }

    openHome () {
        return browser.url(`http://www.lourencodemonaco.com.br/vvtest/`)
    }

    openSurveyPage () {
        return browser.url(`http://www.lourencodemonaco.com.br/vvtest/pesquisa/`)
    }

    async sendSurvey(data){
        await (await this.inputName).setValue(data.name);
        await (await this.inputLastName).setValue(data.lastName);
        await (await this.inputEmail).setValue(data.email);
        await (await this.inputConfirmEmail).setValue(data.confirmEmail);
        await (await this.inputPhoneNumber).setValue(data.phoneNumber);
        await (await this.inputProgrammingLanguage).setValue(data.ProgrammingLanguage)
        await (await this.textCareerPlan).setValue(data.careerPlan)
        await (await this.selectTimeInQa).selectByVisibleText(data.timeInQa)
        await (await this.selectWhatYouLike).selectByVisibleText(data.whatYouLike)
        await (await this.radioWhatToImprove).click()
        await (await this.radioAge).click()
        await (await this.submitButton).click()
        
    }

    async checkSuccessPage(){
        await expect(await this.successMessageLabel).toHaveText('Your form has been successfully submitted.')
    }

}

export default new SurveyPage();