import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeStateValue } from '../store/infoSlice';
import { DUMMY_DATA as data } from "../data/localData";
import BodyComponent from '../components/Body/BodyComponent';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeStateValue({ heading: data.home.heading, desc: data.home.desc })
    );
  }, [dispatch]);

  return <BodyComponent />;
}

export default Home