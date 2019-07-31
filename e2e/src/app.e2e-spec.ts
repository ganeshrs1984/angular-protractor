import {AppPage} from './app.po';
import {browser} from "protractor";

//npm install  -- get dependencies
//ng serve
//ng  e2e

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home Page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home Page');
  });


  it('should display About', () => {
    page.navigateTo();
    // page.getAboutButton().getText().then(function (text) {
    //   console.log(text);
    // });

    expect(page.getAboutButton().getText()).toEqual('About');
  });


  it('should route to About Page', () => {
    page.navigateTo();
    page.getAboutButton().click();
    expect(page.getAboutPageText()).toEqual("about works!")
  });
  /*afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });*/
});
