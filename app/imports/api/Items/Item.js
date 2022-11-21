import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The ItemsCollection. It encapsulates state and variable values for stuff.
 */
class ItemsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ItemsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      price: Number,
      image: String,
      description: String,
      ownerInformation: String,
      owner: String,
      category: {
        type: String,
        allowedValues: ['Clothing', 'Purses', 'Shoes', 'Instruments', 'Jewelry', 'Furniture', 'Books', 'Toys', 'Appliances', 'Other'],
        defaultValue: 'Other',
      },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ItemsCollection.
 * @type {ItemsCollection}
 */
export const ItemsDatabase = new ItemsCollection();
