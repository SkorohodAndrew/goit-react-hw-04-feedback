import React from 'react';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { Rating_list, Rating, Ul, P } from './Statistics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Rating>
      {total > 0 ? (
        <Ul>
          <Rating_list>
            <P>Good: {good}</P>
          </Rating_list>
          <Rating_list>
            <P>Neutral: {neutral}</P>
          </Rating_list>
          <Rating_list>
            <P>Bad: {bad}</P>
          </Rating_list>
          <Rating_list>
            <P>Total: {total}</P>
          </Rating_list>
          <Rating_list>
            <P>Positive feedback: {positivePercentage}%</P>
          </Rating_list>
        </Ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Rating>
  );
};

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
