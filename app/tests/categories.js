import { Selector } from 'testcafe';

class CategoriesPage {
  constructor() {
    this.pageId = '#categories-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** go to makeoffer page from listitem page */
  async gotoMakeOfferPage(testController) {
    await testController.click('#make-offer-list');
  }
}

export const categoriesPage = new CategoriesPage();
