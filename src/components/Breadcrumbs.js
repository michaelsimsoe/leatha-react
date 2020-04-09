import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import getPathName from '../utils/getPathName';

export const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').splice(1);
  console.log('test1', paths[0]);
  console.log('test', getPathName('/' + paths[0]));
  let links;
  if (paths.length > 1) {
    links = (
      <>
        <span>
          <Link to={`/${paths[0]}`}>{getPathName('/' + paths[0])}</Link> &gt;{' '}
        </span>
        <span className="current">Product {paths[1]}</span>
      </>
    );
  } else {
    links = <span className="current">{getPathName('/' + paths[0])}</span>;
  }

  useEffect(() => {}, [links]);
  return (
    <div className="crumbs">
      {' '}
      <span className="root">
        <Link to="/">Home </Link> &gt;
        <span> {links}</span>{' '}
      </span>
    </div>
  );
};
