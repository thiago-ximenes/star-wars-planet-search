import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import MyContext from '../context/MyContext';
import fetchPlanets from '../services/fetchPlanets';

function Index() {
  const { setData } = useContext(MyContext);

  useEffect(() => {
    fetchPlanets().then((data) => setData(data));
  }, [setData]);

  return (
    <Table />
  );
}

export default Index;
