import Button from "geeky-ui/core/Button";
import Typography from "geeky-ui/core/Typography";
import React from "react";
import "./filters.scss";

function Filters() {
  return (
    <>
      <div className="GsFilters__title">
        <Typography variant="h6">Filters</Typography>
        <Typography variant="subtitle1">Clear all</Typography>
      </div>
      <hr />
      <div className="GsFilters__list">
        <div className="GsFilters__listItem">
          <Typography variant="subtitle1" gutterBottom>
            Shipping options
          </Typography>
          <Button variant="contained" size="small">
            Eligible for Pay On Delivery
          </Button>
        </div>

        <div className="GsFilters__listItem sortByDeskView">
          <Typography variant="subtitle1" gutterBottom>
            Sort by
          </Typography>
          <Button variant="contained" size="small">
            Price: High to Low
          </Button>
          <Button variant="contained" size="small">
            Price: Low to High
          </Button>
          <Button variant="contained" size="small">
            Newest Arrivals
          </Button>
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Price</Typography>
          <Button variant="contained" size="small">
            All prices
          </Button>
          <Button variant="contained" size="small">
            Under ₹1000
          </Button>
          <Button variant="contained" size="small">
            ₹1000 - ₹3000
          </Button>
          <Button variant="contained" size="small">
            ₹3000 - ₹6000
          </Button>
          <Button variant="contained" size="small">
            Above ₹6000
          </Button>
          <div className="GsFilters__priceRange">
            <input type="text" placeholder="₹ Min" />
            <input type="text" placeholder="₹ Max" />
            <Button variant="outlined" size="small">
              Go
            </Button>
          </div>
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Rating</Typography>
          <Button variant="contained" size="small">
            All ratings
          </Button>
          <Button variant="contained" size="small">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> & up
          </Button>
          <Button variant="contained" size="small">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> & up
          </Button>
          <Button variant="contained" size="small">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> & up
          </Button>
          <Button variant="contained" size="small">
            <i className="fas fa-star"></i> & up
          </Button>
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Brands</Typography>
          <Button variant="contained" size="small">
            All brands
          </Button>
          <Button variant="contained" size="small">
            Samsung
          </Button>
          <Button variant="contained" size="small">
            Apple
          </Button>
          <Button variant="contained" size="small">
            Oppo
          </Button>
        </div>

        <div className="GsFilters__listItem">
          <Typography variant="subtitle1">Availability</Typography>
          <Button variant="contained" size="small">
            Include out of stock
          </Button>
        </div>
      </div>
    </>
  );
}

export default Filters;
