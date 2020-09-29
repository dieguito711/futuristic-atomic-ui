import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import Button from "../components/Button";

const Components = () => {
  return (
    <Layout>
      <h1>Botones</h1>
      <div>
        <Button type="process">PROCESS</Button>
        <Button type="succeed">SUCCEED</Button>
        <Button type="alert">ALERT</Button>
        <Button type="error">ERROR</Button>
        <Button type="primary">PRIMARY</Button>
      </div>
    </Layout>
  );
};
export default Components;
