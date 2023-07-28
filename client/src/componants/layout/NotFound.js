import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NotFound = (props) => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclmation-triangle"></i>
        Page Not Found
      </h1>
      <p>Sorry this page does not exists</p>
    </Fragment>
  );
};

NotFound.propTypes = {};

export default NotFound;
