export const typeDefs = `#graphql

 type Product {
    product_iD: ID!
    product_name: String
    price: Int
    quantity: Int
    productCategory: Category
    reviews: [Review]
 }

 type Category {
    id: Int!
    name: String
    products: [Product]
 }

 type Review {
   id: Int
   user: String
   rating: Float
   comment: String
   productId: ID!
 }

 type Query {
    products: [Product]
    product(product_id: ID!): Product
    categories: [Category]
    category(id: Int!): Category
 }

`;
