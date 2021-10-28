import React, { useEffect, useState } from "react";
import { fetchShopping, clearShopping } from "../store/shopping/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ShoppingCounter = ({ shopping, fetchShopping, clear }) => {
  useEffect(() => {
    fetchShopping();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        textAlign: "right",
        marginBottom: "1rem",
      }}
    >
      <h2
        style={{
          padding: "1rem 1.5rem",
          right: "5%",
          top: "5%",
          position: "absolute",
          backgroundColor: "black",
          color: "white",
          fontWeight: 200,
          // borderRadius: "10px",
          // display:'flex'
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <ShoppingCart style={{ width: "40px", height: "40px" }} />
        <strong style={{ border: '1px solid white', padding:'8px'}}>
          {shopping}
        </strong>
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = state.shopping.shopping;
  const count =
    data.length &&
    data
      .map((item) => item.quantity)
      .reduce((item, current) => {
        return item + current;
      });
  return {
    shopping: count,
  };
};

const ShoppingCart = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
)

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShopping: bindActionCreators(fetchShopping, dispatch),
    clear: bindActionCreators(clearShopping, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCounter);
