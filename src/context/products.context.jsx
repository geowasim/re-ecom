import { async } from "@firebase/util";
import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  /*
________adding for one time categories collection___
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
