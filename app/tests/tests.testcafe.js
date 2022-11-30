import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { listItemPage } from './listItem.page';
import { categoriesPage } from './categories';
// import { adminItemPage } from './adminItem.page';
import { addListingPage } from './addlisting.page';
import { makeOfferPage } from './makeoffer.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
/* const credentialsAdmin = { username: 'admin@foo.com', password: 'changeme' }; */

fixture('UH-Broadcast localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the List Item page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListItemPage(testController);
  await listItemPage.isDisplayed(testController);
});

test('Test the Add Listing page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddListingPage(testController);
  await addListingPage.isDisplayed(testController);
  await addListingPage.addListing(testController);
});

test('Test the Make Offer page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListItemPage(testController);
  await listItemPage.isDisplayed(testController);
  await listItemPage.gotoMakeOfferPage(testController);
  await makeOfferPage.isDisplayed(testController);
  await makeOfferPage.makeOffer(testController);
});

test('Test the Categories page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.isDisplayed(testController);
});
