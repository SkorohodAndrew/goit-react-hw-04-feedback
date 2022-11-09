import React from 'react';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { Ratinglist, Rating, Ul, P } from './Statistics.styled';

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
          <Ratinglist>
            <P>Good: {good}</P>
          </Ratinglist>
          <Ratinglist>
            <P>Neutral: {neutral}</P>
          </Ratinglist>
          <Ratinglist>
            <P>Bad: {bad}</P>
          </Ratinglist>
          <Ratinglist>
            <P>Total: {total}</P>
          </Ratinglist>
          <Ratinglist>
            <P>Positive feedback: {positivePercentage}%</P>
          </Ratinglist>
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
