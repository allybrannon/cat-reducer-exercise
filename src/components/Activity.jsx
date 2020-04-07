import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

import CatName from "./CatName";

const Activity = ({ activity, name, setActivity }) => (
  <>
    <h1> What is the cat doing? </h1>
    <p>
      {name} is {activity}
    </p>
    <button onClick={() => setActivity("eating")}>Eating</button>
    <button onClick={() => setActivity("playing")}>Playing</button>
    <button onClick={() => setActivity("napping")}>Napping</button>
    <CatName />
  </>
);

const mapStateToProps = (state) => {
  const { activity, name } = state;
  return { activity, name };
};

export default connect(
  mapStateToProps, //mapStateToProps - what do i want?
  { setActivity } //mapDispatchToProps - what do I want to do?
)(Activity);
