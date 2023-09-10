// Inserting the given data in mongodb

db.products.insertMany([
  {
    id: "1",
    product_name: "Intelligent Fresh Chips",
    product_price: 655.0,
    product_material: "Concrete",
    product_color: "mint green",
  },
  {
    id: "2",
    product_name: "Practical Fresh Sausages",
    product_price: 911.0,
    product_material: "Cotton",
    product_color: "indigo",
  },
  {
    id: "3",
    product_name: "Refined Steel Car",
    product_price: 690.0,
    product_material: "Rubber",
    product_color: "gold",
  },
  {
    id: "4",
    product_name: "Gorgeous Plastic Pants",
    product_price: 492.0,
    product_material: "Soft",
    product_color: "plum",
  },
  {
    id: "5",
    product_name: "Sleek Cotton Chair",
    product_price: 33.0,
    product_material: "Fresh",
    product_color: "black",
  },
  {
    id: "6",
    product_name: "Awesome Wooden Towels",
    product_price: 474.0,
    product_material: "Plastic",
    product_color: "orange",
  },
  {
    id: "7",
    product_name: "Practical Soft Shoes",
    product_price: 500.0,
    product_material: "Rubber",
    product_color: "pink",
  },
  {
    id: "8",
    product_name: "Incredible Steel Hat",
    product_price: 78.0,
    product_material: "Rubber",
    product_color: "violet",
  },
  {
    id: "9",
    product_name: "Awesome Wooden Ball",
    product_price: 28.0,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    id: "10",
    product_name: "Generic Wooden Pizza",
    product_price: 84.0,
    product_material: "Frozen",
    product_color: "indigo",
  },
  {
    id: "11",
    product_name: "Unbranded Wooden Cheese",
    product_price: 26.0,
    product_material: "Soft",
    product_color: "black",
  },
  {
    id: "12",
    product_name: "Unbranded Plastic Salad",
    product_price: 89.0,
    product_material: "Wooden",
    product_color: "pink",
  },
  {
    id: "13",
    product_name: "Gorgeous Cotton Keyboard",
    product_price: 37.0,
    product_material: "Concrete",
    product_color: "sky blue",
  },
  {
    id: "14",
    product_name: "Incredible Steel Shirt",
    product_price: 54.0,
    product_material: "Metal",
    product_color: "white",
  },
  {
    id: "15",
    product_name: "Ergonomic Cotton Hat",
    product_price: 43.0,
    product_material: "Rubber",
    product_color: "mint green",
  },
  {
    id: "16",
    product_name: "Small Soft Chair",
    product_price: 47.0,
    product_material: "Cotton",
    product_color: "teal",
  },
  {
    id: "17",
    product_name: "Incredible Metal Car",
    product_price: 36.0,
    product_material: "Fresh",
    product_color: "indigo",
  },
  {
    id: "18",
    product_name: "Licensed Plastic Bacon",
    product_price: 88.0,
    product_material: "Steel",
    product_color: "yellow",
  },
  {
    id: "19",
    product_name: "Intelligent Cotton Chips",
    product_price: 46.0,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    id: "20",
    product_name: "Handcrafted Wooden Bacon",
    product_price: 36.0,
    product_material: "Concrete",
    product_color: "lime",
  },
  {
    id: "21",
    product_name: "Unbranded Granite Chicken",
    product_price: 90.0,
    product_material: "Metal",
    product_color: "gold",
  },
  {
    id: "22",
    product_name: "Ergonomic Soft Hat",
    product_price: 99.0,
    product_material: "Rubber",
    product_color: "black",
  },
  {
    id: "23",
    product_name: "Intelligent Steel Pizza",
    product_price: 95.0,
    product_material: "Cotton",
    product_color: "azure",
  },
  {
    id: "24",
    product_name: "Tasty Rubber Cheese",
    product_price: 47.0,
    product_material: "Frozen",
    product_color: "orchid",
  },
  {
    id: "25",
    product_name: "Licensed Steel Car",
    product_price: 20.0,
    product_material: "Cotton",
    product_color: "indigo",
  },
]);

// 1. Find all the information about each products

db.products.find().pretty();

// OUTPUT

// [
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80445",
//     },
//     id: "1",
//     product_name: "Intelligent Fresh Chips",
//     product_price: 655,
//     product_material: "Concrete",
//     product_color: "mint green",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80446",
//     },
//     id: "2",
//     product_name: "Practical Fresh Sausages",
//     product_price: 911,
//     product_material: "Cotton",
//     product_color: "indigo",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80447",
//     },
//     id: "3",
//     product_name: "Refined Steel Car",
//     product_price: 690,
//     product_material: "Rubber",
//     product_color: "gold",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80448",
//     },
//     id: "4",
//     product_name: "Gorgeous Plastic Pants",
//     product_price: 492,
//     product_material: "Soft",
//     product_color: "plum",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80449",
//     },
//     id: "5",
//     product_name: "Sleek Cotton Chair",
//     product_price: 33,
//     product_material: "Fresh",
//     product_color: "black",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8044a",
//     },
//     id: "6",
//     product_name: "Awesome Wooden Towels",
//     product_price: 474,
//     product_material: "Plastic",
//     product_color: "orange",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8044b",
//     },
//     id: "7",
//     product_name: "Practical Soft Shoes",
//     product_price: 500,
//     product_material: "Rubber",
//     product_color: "pink",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8044c",
//     },
//     id: "8",
//     product_name: "Incredible Steel Hat",
//     product_price: 78,
//     product_material: "Rubber",
//     product_color: "violet",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8044d",
//     },
//     id: "9",
//     product_name: "Awesome Wooden Ball",
//     product_price: 28,
//     product_material: "Soft",
//     product_color: "azure",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8044e",
//     },
//     id: "10",
//     product_name: "Generic Wooden Pizza",
//     product_price: 84,
//     product_material: "Frozen",
//     product_color: "indigo",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8044f",
//     },
//     id: "11",
//     product_name: "Unbranded Wooden Cheese",
//     product_price: 26,
//     product_material: "Soft",
//     product_color: "black",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80450",
//     },
//     id: "12",
//     product_name: "Unbranded Plastic Salad",
//     product_price: 89,
//     product_material: "Wooden",
//     product_color: "pink",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80451",
//     },
//     id: "13",
//     product_name: "Gorgeous Cotton Keyboard",
//     product_price: 37,
//     product_material: "Concrete",
//     product_color: "sky blue",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80452",
//     },
//     id: "14",
//     product_name: "Incredible Steel Shirt",
//     product_price: 54,
//     product_material: "Metal",
//     product_color: "white",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80453",
//     },
//     id: "15",
//     product_name: "Ergonomic Cotton Hat",
//     product_price: 43,
//     product_material: "Rubber",
//     product_color: "mint green",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80454",
//     },
//     id: "16",
//     product_name: "Small Soft Chair",
//     product_price: 47,
//     product_material: "Cotton",
//     product_color: "teal",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80455",
//     },
//     id: "17",
//     product_name: "Incredible Metal Car",
//     product_price: 36,
//     product_material: "Fresh",
//     product_color: "indigo",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80456",
//     },
//     id: "18",
//     product_name: "Licensed Plastic Bacon",
//     product_price: 88,
//     product_material: "Steel",
//     product_color: "yellow",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80457",
//     },
//     id: "19",
//     product_name: "Intelligent Cotton Chips",
//     product_price: 46,
//     product_material: "Soft",
//     product_color: "azure",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80458",
//     },
//     id: "20",
//     product_name: "Handcrafted Wooden Bacon",
//     product_price: 36,
//     product_material: "Concrete",
//     product_color: "lime",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a80459",
//     },
//     id: "21",
//     product_name: "Unbranded Granite Chicken",
//     product_price: 90,
//     product_material: "Metal",
//     product_color: "gold",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8045a",
//     },
//     id: "22",
//     product_name: "Ergonomic Soft Hat",
//     product_price: 99,
//     product_material: "Rubber",
//     product_color: "black",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8045b",
//     },
//     id: "23",
//     product_name: "Intelligent Steel Pizza",
//     product_price: 95,
//     product_material: "Cotton",
//     product_color: "azure",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8045c",
//     },
//     id: "24",
//     product_name: "Tasty Rubber Cheese",
//     product_price: 47,
//     product_material: "Frozen",
//     product_color: "orchid",
//   },
//   {
//     _id: {
//       $oid: "64a7c0d02c2bdbe699a8045d",
//     },
//     id: "25",
//     product_name: "Licensed Steel Car",
//     product_price: 20,
//     product_material: "Cotton",
//     product_color: "indigo",
//   },
// ];

// ------------------------------------------------------------------------------------------------

// 2. Find the product price which are between 400 to 800

db.products.find({ product_price: { $gte: 400, $lte: 800 } });

// OUTPUT

// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ad"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4af"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b0"),
//     "id" : "4",
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_price" : 492,
//     "product_material" : "Soft",
//     "product_color" : "plum"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b2"),
//     "id" : "6",
//     "product_name" : "Awesome Wooden Towels",
//     "product_price" : 474,
//     "product_material" : "Plastic",
//     "product_color" : "orange"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b3"),
//     "id" : "7",
//     "product_name" : "Practical Soft Shoes",
//     "product_price" : 500,
//     "product_material" : "Rubber",
//     "product_color" : "pink"
// }

// ------------------------------------------------------------------------------------------------

// 3. Find the product price which are not between 400 to 600

db.products
  .find({
    $or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }],
  })
  .pretty();

// OUTPUT

// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ad"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ae"),
//     "id" : "2",
//     "product_name" : "Practical Fresh Sausages",
//     "product_price" : 911,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4af"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b1"),
//     "id" : "5",
//     "product_name" : "Sleek Cotton Chair",
//     "product_price" : 33,
//     "product_material" : "Fresh",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b4"),
//     "id" : "8",
//     "product_name" : "Incredible Steel Hat",
//     "product_price" : 78,
//     "product_material" : "Rubber",
//     "product_color" : "violet"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b5"),
//     "id" : "9",
//     "product_name" : "Awesome Wooden Ball",
//     "product_price" : 28,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b6"),
//     "id" : "10",
//     "product_name" : "Generic Wooden Pizza",
//     "product_price" : 84,
//     "product_material" : "Frozen",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b7"),
//     "id" : "11",
//     "product_name" : "Unbranded Wooden Cheese",
//     "product_price" : 26,
//     "product_material" : "Soft",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b8"),
//     "id" : "12",
//     "product_name" : "Unbranded Plastic Salad",
//     "product_price" : 89,
//     "product_material" : "Wooden",
//     "product_color" : "pink"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b9"),
//     "id" : "13",
//     "product_name" : "Gorgeous Cotton Keyboard",
//     "product_price" : 37,
//     "product_material" : "Concrete",
//     "product_color" : "sky blue"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ba"),
//     "id" : "14",
//     "product_name" : "Incredible Steel Shirt",
//     "product_price" : 54,
//     "product_material" : "Metal",
//     "product_color" : "white"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4bb"),
//     "id" : "15",
//     "product_name" : "Ergonomic Cotton Hat",
//     "product_price" : 43,
//     "product_material" : "Rubber",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4bc"),
//     "id" : "16",
//     "product_name" : "Small Soft Chair",
//     "product_price" : 47,
//     "product_material" : "Cotton",
//     "product_color" : "teal"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4bd"),
//     "id" : "17",
//     "product_name" : "Incredible Metal Car",
//     "product_price" : 36,
//     "product_material" : "Fresh",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4be"),
//     "id" : "18",
//     "product_name" : "Licensed Plastic Bacon",
//     "product_price" : 88,
//     "product_material" : "Steel",
//     "product_color" : "yellow"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4bf"),
//     "id" : "19",
//     "product_name" : "Intelligent Cotton Chips",
//     "product_price" : 46,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4c0"),
//     "id" : "20",
//     "product_name" : "Handcrafted Wooden Bacon",
//     "product_price" : 36,
//     "product_material" : "Concrete",
//     "product_color" : "lime"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4c1"),
//     "id" : "21",
//     "product_name" : "Unbranded Granite Chicken",
//     "product_price" : 90,
//     "product_material" : "Metal",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4c2"),
//     "id" : "22",
//     "product_name" : "Ergonomic Soft Hat",
//     "product_price" : 99,
//     "product_material" : "Rubber",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4c3"),
//     "id" : "23",
//     "product_name" : "Intelligent Steel Pizza",
//     "product_price" : 95,
//     "product_material" : "Cotton",
//     "product_color" : "azure"
// }

// ------------------------------------------------------------------------------------------------

// 4. List all Four Product which are greater than 500 in price

db.products
  .find({ product_price: { $gte: 500 } })
  .limit(4)
  .pretty();

// OUTPUT

// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ad"),
//     "id" : "1",
//     "product_name" : "Intelligent Fresh Chips",
//     "product_price" : 655,
//     "product_material" : "Concrete",
//     "product_color" : "mint green"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ae"),
//     "id" : "2",
//     "product_name" : "Practical Fresh Sausages",
//     "product_price" : 911,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4af"),
//     "id" : "3",
//     "product_name" : "Refined Steel Car",
//     "product_price" : 690,
//     "product_material" : "Rubber",
//     "product_color" : "gold"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b3"),
//     "id" : "7",
//     "product_name" : "Practical Soft Shoes",
//     "product_price" : 500,
//     "product_material" : "Rubber",
//     "product_color" : "pink"
// }

// ------------------------------------------------------------------------------------------------

// 5. Find the product name and product material of each products

db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).pretty();

// OUTPUT

// { "product_name" : "Intelligent Fresh Chips", "product_material" : "Concrete" }
// { "product_name" : "Practical Fresh Sausages", "product_material" : "Cotton" }
// { "product_name" : "Refined Steel Car", "product_material" : "Rubber" }
// { "product_name" : "Gorgeous Plastic Pants", "product_material" : "Soft" }
// { "product_name" : "Sleek Cotton Chair", "product_material" : "Fresh" }
// { "product_name" : "Awesome Wooden Towels", "product_material" : "Plastic" }
// { "product_name" : "Practical Soft Shoes", "product_material" : "Rubber" }
// { "product_name" : "Incredible Steel Hat", "product_material" : "Rubber" }
// { "product_name" : "Awesome Wooden Ball", "product_material" : "Soft" }
// { "product_name" : "Generic Wooden Pizza", "product_material" : "Frozen" }
// { "product_name" : "Unbranded Wooden Cheese", "product_material" : "Soft" }
// { "product_name" : "Unbranded Plastic Salad", "product_material" : "Wooden" }
// { "product_name" : "Gorgeous Cotton Keyboard", "product_material" : "Concrete" }
// { "product_name" : "Incredible Steel Shirt", "product_material" : "Metal" }
// { "product_name" : "Ergonomic Cotton Hat", "product_material" : "Rubber" }
// { "product_name" : "Small Soft Chair", "product_material" : "Cotton" }
// { "product_name" : "Incredible Metal Car", "product_material" : "Fresh" }
// { "product_name" : "Licensed Plastic Bacon", "product_material" : "Steel" }
// { "product_name" : "Intelligent Cotton Chips", "product_material" : "Soft" }
// { "product_name" : "Handcrafted Wooden Bacon", "product_material" : "Concrete" }

// ------------------------------------------------------------------------------------------------

// 6. Find the product with a row id of 10

db.products.find({ id: "10" }).pretty();

// OUTPUT

// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b6"),
//     "id" : "10",
//     "product_name" : "Generic Wooden Pizza",
//     "product_price" : 84,
//     "product_material" : "Frozen",
//     "product_color" : "indigo"
// }

// ------------------------------------------------------------------------------------------------

// 7. Find only the product name and product material

db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).pretty();

// OUTPUT

// { "product_name" : "Intelligent Fresh Chips", "product_material" : "Concrete" }
// { "product_name" : "Practical Fresh Sausages", "product_material" : "Cotton" }
// { "product_name" : "Refined Steel Car", "product_material" : "Rubber" }
// { "product_name" : "Gorgeous Plastic Pants", "product_material" : "Soft" }
// { "product_name" : "Sleek Cotton Chair", "product_material" : "Fresh" }
// { "product_name" : "Awesome Wooden Towels", "product_material" : "Plastic" }
// { "product_name" : "Practical Soft Shoes", "product_material" : "Rubber" }
// { "product_name" : "Incredible Steel Hat", "product_material" : "Rubber" }
// { "product_name" : "Awesome Wooden Ball", "product_material" : "Soft" }
// { "product_name" : "Generic Wooden Pizza", "product_material" : "Frozen" }
// { "product_name" : "Unbranded Wooden Cheese", "product_material" : "Soft" }
// { "product_name" : "Unbranded Plastic Salad", "product_material" : "Wooden" }
// { "product_name" : "Gorgeous Cotton Keyboard", "product_material" : "Concrete" }
// { "product_name" : "Incredible Steel Shirt", "product_material" : "Metal" }
// { "product_name" : "Ergonomic Cotton Hat", "product_material" : "Rubber" }
// { "product_name" : "Small Soft Chair", "product_material" : "Cotton" }
// { "product_name" : "Incredible Metal Car", "product_material" : "Fresh" }
// { "product_name" : "Licensed Plastic Bacon", "product_material" : "Steel" }
// { "product_name" : "Intelligent Cotton Chips", "product_material" : "Soft" }
// { "product_name" : "Handcrafted Wooden Bacon", "product_material" : "Concrete" }

// ------------------------------------------------------------------------------------------------

// 8. Find all products which contain the value of soft in product material

db.products.find({ product_material: "soft" }).pretty();

// OUTPUT

// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b0"),
//     "id" : "4",
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_price" : 492,
//     "product_material" : "Soft",
//     "product_color" : "plum"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b5"),
//     "id" : "9",
//     "product_name" : "Awesome Wooden Ball",
//     "product_price" : 28,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b7"),
//     "id" : "11",
//     "product_name" : "Unbranded Wooden Cheese",
//     "product_price" : 26,
//     "product_material" : "Soft",
//     "product_color" : "black"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4bf"),
//     "id" : "19",
//     "product_name" : "Intelligent Cotton Chips",
//     "product_price" : 46,
//     "product_material" : "Soft",
//     "product_color" : "azure"
// }

// ------------------------------------------------------------------------------------------------

// 9. Find products which contain product color indigo and product price 492.00

db.products
  .find({
    $or: [{ product_color: "indigo" }, { product_price: 492 }],
  })
  .pretty();

// OUTPUT

// {
//     "_id" : ObjectId("64fd864125bb3c131021d4ae"),
//     "id" : "2",
//     "product_name" : "Practical Fresh Sausages",
//     "product_price" : 911,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b0"),
//     "id" : "4",
//     "product_name" : "Gorgeous Plastic Pants",
//     "product_price" : 492,
//     "product_material" : "Soft",
//     "product_color" : "plum"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4b6"),
//     "id" : "10",
//     "product_name" : "Generic Wooden Pizza",
//     "product_price" : 84,
//     "product_material" : "Frozen",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4bd"),
//     "id" : "17",
//     "product_name" : "Incredible Metal Car",
//     "product_price" : 36,
//     "product_material" : "Fresh",
//     "product_color" : "indigo"
// }
// {
//     "_id" : ObjectId("64fd864125bb3c131021d4c5"),
//     "id" : "25",
//     "product_name" : "Licensed Steel Car",
//     "product_price" : 20,
//     "product_material" : "Cotton",
//     "product_color" : "indigo"
// }

// ------------------------------------------------------------------------------------------------

// 10. Delete the products which product price value are same

db.products.deleteMany({
  product_price: { $eq: db.products.distinct("product_price") },
});

// OUTPUT

// The products which has the same price values will be deleted
