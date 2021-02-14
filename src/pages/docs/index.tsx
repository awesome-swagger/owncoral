/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/react';
import { Nav, Content } from '../../components';
import { Container, TopBar } from './style';

const Docs = () => {
  return (
    <Fragment>
      <Nav />
      <Content>
        <TopBar>
          <h2>Documents</h2>
        </TopBar>
        <Container>
          <h2>Balance Sheet</h2>
          <h2>Income Sheet</h2>
          <h2>Closing Documents</h2>
          <h2>Tax Documents</h2>
        </Container>
      </Content>
    </Fragment>
  );
};
export default Docs;
