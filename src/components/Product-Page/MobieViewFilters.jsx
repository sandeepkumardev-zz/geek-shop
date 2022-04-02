import { Button, Typography } from "geeky-ui";
import React from "react";
import Filters from "./Filters";
import "./mobileViewFilters.scss";

function MobieViewFilters() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="GsProducts__sortBy">
        <Typography variant="subtitle1">
          <span className="sortBy__dropdown">Sort by: Featured</span>
        </Typography>
        <div className="GsProducts__sortBy__options">
          <Typography variant="subtitle1">Featured</Typography>
          <Typography variant="subtitle1">Price: Low to High</Typography>
          <Typography variant="subtitle1">Price: High to Low</Typography>
          <Typography variant="subtitle1">Newest Arrivals</Typography>
        </div>
      </div>

      <div className="GsMobileFilters">
        <Button variant="contained" size="small" onClick={() => setShow(!show)}>
          Filters
        </Button>

        <FiltersModel show={show} setShow={setShow} />
      </div>
    </>
  );
}

const FiltersModel = ({ show, setShow }) => {
  return (
    <div className={`GsFiltersModel ${show && "GsModel--Show"}`}>
      <Filters />
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => setShow(false)}
        className="GsFiltersModel__close"
      >
        Close
      </Button>
    </div>
  );
};

export default MobieViewFilters;
