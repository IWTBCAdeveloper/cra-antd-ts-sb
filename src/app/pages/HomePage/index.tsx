import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'antd';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Button type="primary">Button</Button>
      <span>{process.env.REACT_APP_NOT_SECRET_CODE}</span>
    </>
  );
}
