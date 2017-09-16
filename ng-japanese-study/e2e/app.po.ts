import { browser, by, element } from 'protractor';

export class JapaneseStudyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jap-root h1')).getText();
  }
}
