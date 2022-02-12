import "../styles/Products.css";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../globalConstant.js";
import Rating from "@mui/material/Rating";

//rating
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Shop() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //Rating Style
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const getProducts = () => {
    fetch(`${API_URL}/product`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProducts, []);

  async function productFilter(filter){
    const filteredProducts  = products.filter((item)=>item.type === filter);
    setFilteredProducts(filteredProducts)  
  }
  return (
    <div className="shop-container">
        <div className="shop-product">
        <p className="txt">Product Overview</p>
        <div>
        <Button variant="text" onClick={getProducts}>
          All Products
        </Button>
        <Button variant="text" onClick={()=>productFilter("womens-accessories")}>
          Women
        </Button>
        <Button variant="text" onClick={()=>productFilter("mens-accessories")}>Men</Button>
        <Button variant="text" onClick={()=>productFilter("bag")}>Bag</Button>
        <Button variant="text" onClick={()=>productFilter("shoe")}>Shoes</Button>
        <Button variant="text" onClick={()=>productFilter("watch")}>Watches</Button>
        </div>
        <div className="products-container">
          {filteredProducts &&
            filteredProducts.map(
              ({ amount, desc, img, rating, title, type, _id }, index) => {
                return (
                  <div className="products" key={_id}>
                    <img src={img} alt="product-img" className="productimg" />
                    <div className="product-detail">
                      <div
                        className="product-name"
                        onClick={() => history.push("/product/" + _id)}
                      >
                        <span>{title}</span>
                        <FavoriteBorderIcon />
                      </div>
                      <span>
                      <StyledRating
                        name="customized-color"
                        defaultValue={rating}
                        getLabelText={(value) =>
                          `${value} Heart${value !== 1 ? "s" : ""}`
                        }
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        readOnly
                      />
                      </span>
                      <span>
                        <b>₹{amount}.00</b>
                      </span>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}

export { Shop };
