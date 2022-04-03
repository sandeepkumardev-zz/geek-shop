import Button from "geeky-ui/core/Button";
import Typography from "geeky-ui/core/Typography";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./filters.scss";

function Filters() {
  const [minPrice, setMinPrice] = React.useState(null);
  const [maxPrice, setMaxPrice] = React.useState(null);
  const [inputError, setInputError] = React.useState(null);

  const { dispatch, brandsName } = useAppContext();

  const inputPriceFilter = (e) => {
    e.preventDefault();
    if (minPrice === null || maxPrice === null) {
      setInputError("Please enter both values");
    } else if (minPrice.match(/^\d+$/) && maxPrice.match(/^\d+$/)) {
      setInputError(null);
      updateFilters({ allPrice: false, minPrice, maxPrice });
    } else {
      setInputError("Please enter a valid number");
    }
  };

  const updateFilters = (value) => {
    dispatch({ type: "APPLY_FILTERS", payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <>
      <div className="GsFilters__title">
        <Typography variant="h6">Filters</Typography>
        <Typography variant="subtitle1" onClick={() => clearFilters()}>
          Clear all
        </Typography>
      </div>
      <hr />
      <div className="GsFilters__list">
        <div className="GsFilters__listItem">
          <Typography variant="subtitle1" gutterBottom>
            Shipping options
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ payOnDelivery: true })}
          >
            Eligible for Pay On Delivery
          </Button>
        </div>

        <div className="GsFilters__listItem sortByDeskView">
          <Typography variant="subtitle1" gutterBottom>
            Sort by
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({
                newestArrivals: false,
                highToLow: true,
                lowToHigh: false,
              })
            }
          >
            Price: High to Low
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({
                newestArrivals: false,
                lowToHigh: true,
                highToLow: false,
              })
            }
          >
            Price: Low to High
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({
                newestArrivals: true,
                lowToHigh: false,
                highToLow: false,
              })
            }
          >
            Newest Arrivals
          </Button>
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Price</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({ allPrice: true, minPrice: null, maxPrice: null })
            }
          >
            All prices
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({ allPrice: false, minPrice: 0, maxPrice: 1000 })
            }
          >
            Under ₹1000
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({ allPrice: false, minPrice: 1000, maxPrice: 3000 })
            }
          >
            ₹1000 - ₹3000
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({ allPrice: false, minPrice: 3000, maxPrice: 5000 })
            }
          >
            ₹3000 - ₹5000
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              updateFilters({
                allPrice: false,
                minPrice: 5000,
                maxPrice: null,
              })
            }
          >
            Above ₹5000
          </Button>
          <div className="GsFilters__priceRange">
            <input
              type="text"
              placeholder="₹ Min"
              onChange={(e) => setMinPrice(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="₹ Max"
              onChange={(e) => setMaxPrice(e.target.value)}
              required
            />
            <Button variant="outlined" size="small" onClick={inputPriceFilter}>
              Go
            </Button>
          </div>
          {inputError && (
            <Typography variant="subtitle2" style={{ color: "red" }}>
              {inputError}
            </Typography>
          )}
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Rating</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ rating: "all" })}
          >
            All ratings
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ rating: 4 })}
          >
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> & up
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ rating: 3 })}
          >
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> & up
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ rating: 2 })}
          >
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> & up
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ rating: 1 })}
          >
            <i className="fas fa-star"></i> & up
          </Button>
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Discount</Typography>
          {[10, 20, 40, 60].map((discount) => (
            <Button
              key={discount}
              variant="contained"
              size="small"
              onClick={() => updateFilters({ discount })}
            >
              {discount}% or more
            </Button>
          ))}
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Brands</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => updateFilters({ brand: "all" })}
          >
            All brands
          </Button>
          {brandsName.map((brand) => (
            <Button
              key={brand}
              variant="contained"
              size="small"
              onClick={() => updateFilters({ brand: brand })}
            >
              {brand}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filters;
