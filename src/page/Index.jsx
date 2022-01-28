import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import Form from '../components/Form';
import MyContext from '../context/MyContext';
import fetchPlanets from '../services/fetchPlanets';
import Header from '../components/Header';
import BarOfFiltrates from '../components/BarOfFiltrates';
import FormOrdering from '../components/FormOrdering';

function Index() {
  const { setData } = useContext(MyContext);

  useEffect(() => {
    fetchPlanets().then((data) => setData(data));
  }, [setData]);

  return (
    <div
      className="h-screen max-w-screen-lg mx-auto"
    >
      <Header />
      <Form />
      <FormOrdering />
      <BarOfFiltrates />
      <Table />
    </div>
  );
}

export default Index;
