import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/authSlice';


export const PrivateRoute = ({ children }) => {
  return <div>{children}</div>;
};

