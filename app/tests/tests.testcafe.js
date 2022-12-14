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
const credentials = { username: 'john@hawaii.edu', password: 'changeme' };
const credentialsAdmin = { username: 'admin@hawaii.edu', password: 'changeme' };

fixture('UH-Broadcast localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that SignIn and SignOut work', async (testController) => {
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

test('Test the Make Offer', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.isDisplayed(testController);
  await categoriesPage.gotoMakeOfferPage(testController);
  await makeOfferPage.isDisplayed(testController);
  await makeOfferPage.makeOffer(testController);
});

test('Test the Items For Sale page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriesPage.isDisplayed(testController);
});

test('Test that Admin SignIn and SignOut work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await navBar.isLoggedIn(testController, credentialsAdmin.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
