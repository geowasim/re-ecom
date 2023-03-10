import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

/**
 * <div className="shop-container" key={title}>
          <h2>{title.toLocaleUpperCase()}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <CategoryPreview key={product.id} product={product} />
            ))}
          </div>
      </div>

 */
