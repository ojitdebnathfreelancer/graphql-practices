import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { product_id: String }, context: any) => {
      return db.products.find(
        (product) => product.product_iD === args.product_id
      );
    },
    categories: () => db.categories,
    category: (parent: any, args: { id: number }, context: any) => {
      return db.categories.find((category) => category.id === args.id);
    },
  },
};
