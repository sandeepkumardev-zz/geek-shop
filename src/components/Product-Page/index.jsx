import { Typography } from "geeky-ui";
import React from "react";
import Filters from "./Filters";
import MobieViewFilters from "./MobieViewFilters";
import "./product-page.scss";
import ProductCard from "./ProductCard";

function ProductPage() {
  const [products, setProducts] = React.useState(null);

  //   console.log(products);

  React.useEffect(() => {
    fetch("./MOCK_DATA.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="GsContainer">
      <div className="GsProductPage">
        <div id="GsFilters" className="GsProductPage__filters">
          <Filters />
        </div>

        <div id="GsProducts">
          <div className="GsProducts__header">
            <Typography variant="subtitle1">
              {products?.length} results
            </Typography>

            {/* shows featured filter and mobile-view filters  */}
            <MobieViewFilters />
          </div>
          <div className="GsProducts__productsList">
            {products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
