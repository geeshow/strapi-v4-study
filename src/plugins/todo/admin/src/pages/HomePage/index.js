/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {Layout, BaseHeaderLayout, ContentLayout}  from "@strapi/design-system/Layout"
const HomePage = () => {
  return (
    <Layout>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="Welcome to the Todo plugin"
        as="h2"
      />
      <ContentLayout>
        <p>Happy Strapi coding</p>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
