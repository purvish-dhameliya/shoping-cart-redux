import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const userData = useSelector((state) => state.cart);
  const dispatch = useDispatch((state) => state.remove);
  const removefromCart = (id) => {
    dispatch(remove(id));
  };
  const card = userData.map((data, index) => {
    return (
      <>
        <div    
            key={index}
          className="col-md-12 d-flex justify-content-center"
          style={{ marginBottom: "20px", backgroundColor: "white" }}
        >
          <Card
            style={{ width: "18rem" }}
            className="d-flex align-items-center justify-content-center pt-3"
            key={data.id}
          >
            <Card.Img
              variant="top"
              src={data.image}
              style={{ width: "100px", height: "130px" }}
            />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>INR: {data.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="danger" onClick={() => removefromCart(data.id)}>
                Remove Item
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="row">{card}</div>
    </>
  );
};

export default Cart;
