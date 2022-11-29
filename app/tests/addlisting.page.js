import { Selector } from 'testcafe';

class AddListingPage {
  constructor() {
    this.pageId = '#add-listing-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async addListing(testController) {
    const name = `radgrad-${new Date().getTime()}`;
    const price = '10.00';
    const image = 'https://www.northlandfurniture.com/wp-content/uploads/2015/11/Dorm-Desk-Light-student-housing.jpg';
    const description = 'Perfect for dorm or small room';
    const ownerInfo = `${name}@xyz.com`;

    // const description = 'Growing awesome computer scientists, one graduate at a time.';
    await this.isDisplayed(testController);
    // Define the new project
    await testController.typeText('#addListingFormName', name);
    await testController.typeText('#addListingFormPrice', price);
    await testController.typeText('#addListingFormImage', image);
    await testController.typeText('#addListingFormDescription', description);
    await testController.typeText('#addListingFormOwnerInfo', ownerInfo);

    // Select a category these are the defined categories.
    await testController.click(Selector('select'));
    const interestsSelector = Selector('option');
    await testController.click(interestsSelector.nth(5));
    //
    await testController.click('#addListingFormSubmit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const addListingPage = new AddListingPage();
