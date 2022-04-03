import Button from "geeky-ui/core/Button";
import IconButton from "geeky-ui/core/IconButton";
import Typography from "geeky-ui/core/Typography";
import React from "react";
import "./productCard.scss";

const ProductCard = ({ product }) => {
  const { product_name, price, product_img, rating, rating_users, prev_price } =
    product;

  const [filledStar, setFilledStar] = React.useState([]);
  const [blnakStar, setBlnakStar] = React.useState([]);

  //calculate the off price
  const [offPrice, setOffPrice] = React.useState(0);
  React.useEffect(() => {
    let percentOff = ((prev_price - price) * 100) / prev_price;
    setOffPrice(Math.ceil(percentOff));
  }, [prev_price, price]);

  //calculate the filled and blank stars
  React.useEffect(() => {
    let ratNO = Math.floor(rating);
    setFilledStar(Array(ratNO).fill(1));
    setBlnakStar(Array(5 - ratNO).fill(1));
  }, [rating]);

  return (
    <div className="GsProductCard">
      <div className="GsProductCard__image">
        <img src={product_img} alt={product_name} />
      </div>
      <IconButton color="primary" className="addToWishList">
        <i className="far fa-heart"></i>
      </IconButton>
      <div className="GsProductCard__info">
        <div className="GsProductCard__name">
          <Typography variant="h6">{product_name}</Typography>
        </div>
        <div className="GsProductCard__rating">
          {filledStar?.map((star, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {blnakStar?.map((star, index) => (
            <i key={index} className="far fa-star"></i>
          ))}
          <Typography variant={"subtitle1"}>{rating_users}</Typography>
        </div>
        <div className="GsProductCard__price">
          <Typography variant="h6">₹{price}</Typography>
          <Typography variant="subtitle1">₹{prev_price}</Typography>
          <Typography variant="subtitle1">({offPrice}% off)</Typography>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="addToCartBtn"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
