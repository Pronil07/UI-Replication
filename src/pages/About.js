import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BodyComponent from "../components/Body/BodyComponent";

import { DUMMY_DATA as data } from "../data/localData";
import { changeStateValue } from "../store/infoSlice";

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeStateValue({ heading: data.about.heading, desc: data.about.desc })
    );
  }, [dispatch]);

  return <BodyComponent />;
}

export default About;
