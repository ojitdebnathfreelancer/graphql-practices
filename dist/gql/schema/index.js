export const typeDefs = `#graphql

 type Product {
    product_iD: ID!,
    product_name: String,
    category: String,
    price: Int,
    quantity: Int,
    productCategory: Category
 }

 type Category {
    id: Int!,
    name: String
 }

 type Query {
    products: [Product]
    product(product_id: ID!): Product
    categories: [Category]
    category(id: Int!): Category
 }

`;
