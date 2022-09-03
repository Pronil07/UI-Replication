import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BodyComponent from "../components/Body/BodyComponent";

import { DUMMY_DATA as data } from "../data/localData";
import { changeStateValue } from "../store/infoSlice";

function Pricing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeStateValue({ heading: data.pricing.heading, desc: data.pricing.desc })
    );
  }, [dispatch]);

  return <BodyComponent />;
}

export default Pricing