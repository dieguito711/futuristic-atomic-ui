import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import Button from "../components/Button";
import Image from "../components/Image";
const Components = () => {
  return (
    <Layout>
      <h1>Botones</h1>
      <div>
        <Button disabled={false} type="process">
          PROCESS
        </Button>
        <Button disabled={false} type="succeed">
          SUCCEED
        </Button>
        <Button disabled={false} type="alert">
          ALERT
        </Button>
        <Button disabled={false} type="error">
          ERROR
        </Button>
        <Button disabled={false} type="primary">
          PRIMARY
        </Button>
        <Button disabled={true} type="primary">
          DISABLED
        </Button>
      </div>
      <h1>Imágenes</h1>
      <div>
        <Image src="/img1.png" caption=""></Image>
        <Image src="/img1.png" caption="hola este es un texto dummy"></Image>
      </div>
    </Layout>
  );
};
export default Components;
