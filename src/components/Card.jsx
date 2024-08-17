
import React, { useState } from "react";

function Card({ cart, setCart, data }) {
  const [isAddButton, setIsAddButton] = useState(true);
  
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          
          {data.isSale ? data.sale : null}
        </div>
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.productName}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
            </div>
            <span
              className={
                data.isPrice1 ? "text-muted text-decoration-line-through" : ""
              }
            >
              {data.price1}
            </span>
            {data.price2}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {isAddButton ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart + 1);
                  setIsAddButton(false);
                }}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart - 1);
                  setIsAddButton(true);
                }}
              >
                Remove to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


