import React from "react";
import { connect } from "react-redux";

const CATLIST = ({ cats }) => {
  const catsArray = Object.keys(cats);

  return (
    <>
      <ul>
        {catsArray.map((cat, index) => {
          return (
            <li>
              key={`cat-${index}`}>{cat.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const { cats } = state;
  return cats;
};

export default connect(mapStateToProps, null)(CatList);
