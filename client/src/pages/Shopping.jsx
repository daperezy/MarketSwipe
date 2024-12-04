import './Shopping.css';
import React, { useState } from 'react';

import SwipeProducts from "../components/SwipeProducts";
import { useLocation } from 'react-router-dom';

const Shopping = () => {

  const { state } = useLocation();
  const { userId, email } = state || {};

  return (
    <div>
      <SwipeProducts />
    </div>
  );
};

export default Shopping;

