import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeStateValue } from '../store/infoSlice';
import { DUMMY_DATA as data } from "../data/localData";
import BodyComponent from '../components/Body/BodyComponent';

function Enterprise() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeStateValue({ heading: data.enterprise.heading, desc: data.enterprise.desc })
    );
  }, [dispatch]);

  return <BodyComponent />;
}

export default Enterprise