import React from "react";
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
          Filters
        </div>
        <div id="GsProducts" className="GsProductPage__products">
          <div className="GsProducts__filtersList">Filter List</div>
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
