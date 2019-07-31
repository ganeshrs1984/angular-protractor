import {browser, by, element} from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get("/home") as Promise<any>;

  }

  getTitleText() {
    return element(by.css('app-home h2')).getText() as Promise<string>;
  }

  getAboutButton() {
    return element(by.css('[routerlink="/about"]'))
  }

  getAboutPageText() {

    element(by.css('app-about p')).getText().then(function (text) {
      console.log(text);
    });

    return element(by.css('app-about p')).getText() as Promise<string>;
  }


}
