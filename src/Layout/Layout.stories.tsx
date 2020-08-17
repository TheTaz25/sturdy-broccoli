import React from 'react';
import Layout, { Header, Content, Footer } from './Layout';
import Base from '../Base/Base';

export default {
  title: 'Layout',
  component: Layout,
};

export const Basic = () => (
  <Base>
    <Layout>
      <Header>
        This is a header
      </Header>
      <Content>
        This is some content
      </Content>
      <Footer>
        This is the footer
      </Footer>
    </Layout>
  </Base>
);
