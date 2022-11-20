import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { ItemsDatabase } from '../../api/Items/Item';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addItems = (item) => {
  console.log(` Adding: ${item.name} (${item.owner})`);
  ItemsDatabase.collection.insert(item);
};
if (ItemsDatabase.collection.find().count() === 0) {
  if (Meteor.settings.defaultItem) {
    console.log('Creating default items');
    Meteor.settings.defaultItem.forEach(item => addItems(item));
  }
}
