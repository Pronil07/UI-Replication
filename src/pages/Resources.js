import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeStateValue } from '../store/infoSlice';
import { DUMMY_DATA as data } from "../data/localData";
import BodyComponent from '../components/Body/BodyComponent';

function Resources() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeStateValue({ heading: data.resources.heading, desc: data.resources.desc })
    );
  }, [dispatch]);

  return <BodyComponent />;
}

export default Resources