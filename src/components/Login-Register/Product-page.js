import { ProductData } from "./Products";
import "./Product.css";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import { motion } from "framer-motion";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function Product() {
  const [product, setProduct] = useState(ProductData);
  const [checkCategory, setcheckCategory] = useState("");
  const [checkRating, setcheckRating] = useState("");
  const [filter, setFiltered] = useState(ProductData);
  const [all, setAll] = useState(true);
  const productData = product.map((item) => {
    return (
     <ProductItem key={item.id} item={item}/>
    );
  });
  const changeProductByCategory = (input) => {
    input === "all" ? setAll(true) : setAll(false);
    setcheckCategory(input);
  };
  const changeProductByRating = (i) => {
    checkRating === i.slice(0, 1)
      ? setcheckRating(null)
      : setcheckRating(i.slice(0, 1));
  };

  //   main rendering function
  useEffect(() => {
    if (all && checkRating) {
      return setProduct(
        filter.filter((item) => {
          return item.rating.slice(0, 1) === checkRating;
        })
      );
    } else if (all) {
      return setProduct(ProductData);
    } else if (checkCategory && checkRating) {
      setAll(false);
      setProduct(
        filter.filter((item) => {
          return (
            item.name === checkCategory &&
            item.rating.slice(0, 1) === checkRating
          );
        })
      );
    } else if (checkCategory && !checkRating) {
      setAll(false);
      setProduct(
        filter.filter((item) => {
          return item.name === checkCategory;
        })
      );
    } else if (checkRating && !checkCategory) {
      setAll(false);
      setProduct(
        filter.filter((item) => {
          return item.rating.slice(0, 1) === checkRating;
        })
      );
    }
  }, [all, checkCategory, checkRating, filter]);
  const logItem= useSelector(state=> state.cart.itemsList)
console.log(logItem)
  return (
    <div className="main-page">
      <Filter
        category={changeProductByCategory}
        rating={changeProductByRating}
      />
      <motion.div l className="product-grid">
        {product.length ? productData : <h1 className="no-items">No items found</h1>}
      </motion.div>
    </div>
  );
}

export default Product;
