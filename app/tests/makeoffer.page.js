import { Selector } from 'testcafe';

class MakeOfferPage {
  constructor() {
    this.pageId = '#make-offer-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async makeOffer(testController) {
    const offer = '12313313';

    await this.isDisplayed(testController);
    await testController.typeText('#makeOfferAmount', offer);
    await testController.click('#makeOfferSubmit input.btn.btn-primary');
  }

}

export const makeOfferPage = new MakeOfferPage();
