import * as React from "react";
import { useState, useEffect } from "react";
import "../styles/ProductDetail.css";
import { useParams, useHistory } from "react-router-dom";
import { API_URL } from "../globalConstant.js";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const [Msg, setMsg] = React.useState(null);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/product/${id}`, { method: "GET" }) //method is optional when read the data
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
    // eslint-disable-next-line
  }, []);

  const placeOrder = () => {
    const email = localStorage.getItem("email") || null 
    console.log(email)
    if (email) {
      fetch(`${API_URL}/order/${id}`, {
        method: "POST",
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status === 200) {
          setMsg({
            Message: "Order Added Successfully",
            status: "success",
          });
        }else{
          setMsg({ Message: "Error Occured ", status: "error" });
        }
      });
    } else {
      setMsg({ Message: "Need to Signin for order Product ", status: "error" });
    }
  };
  return (
    <div className="product-details">
      {
        Msg && (<Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={Msg.status}>{Msg.Message}</Alert>
      </Stack>)
      }
      <div className="product-container">
        {product &&
          product.map(({ amount, desc, img, rating, title, type, _id }) => {
            return (
              <div className="product" key={_id}>
                <div className="btn">
                  <Button
                    variant="text"
                    onClick={() => history.goBack()}
                    startIcon={<ArrowBackIcon />}
                  >
                    back
                  </Button>
                </div>
                <img src={img} alt="product-img" className="product-img" />
                <div className="product-detail">
                  <span className="productName">{title}</span>
                  <span>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                    />
                  </span>
                  <span>
                    <b>₹{amount}.00</b>
                  </span>
                  <span>{desc}</span>
                  <Button
                    variant="contained"
                    onClick={placeOrder}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
      
      
    </div>
  );
}

export { ProductDetail };
