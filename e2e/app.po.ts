import { browser, element, by } from 'protractor';

export class MinicardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mi-root h1')).getText();
  }
}
