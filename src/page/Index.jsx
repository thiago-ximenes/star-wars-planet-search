import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import Form from '../components/Form';
import MyContext from '../context/MyContext';
import fetchPlanets from '../services/fetchPlanets';

function Index() {
  const { setData } = useContext(MyContext);

  useEffect(() => {
    fetchPlanets().then((data) => setData(data));
  }, [setData]);

  return (
    <>
      <Form />
      <Table />
    </>
  );
}

export default Index;
