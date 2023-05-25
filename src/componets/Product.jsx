import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "error") {
    return <h1>error while doing code...</h1>;
  }

  const addtoCart = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {products.map((product, index) => {
            return (
              <>
                <div
                key={index}
                  className="col-md-3 d-flex justify-content-center"
                  style={{ marginBottom: "20px", backgroundColor: "white" }}
                >
                  <Card
                    key={product.id}
                    style={{ width: "18rem" }}
                    className="d-flex align-items-center justify-content-center pt-3"
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "100px", height: "130px" }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>INR: {product.price}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="info" onClick={() => addtoCart(product)}>
                        Add to cart
                      </Button>
                    </Card.Footer>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
