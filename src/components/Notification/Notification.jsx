import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Container>{message}</Container>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
