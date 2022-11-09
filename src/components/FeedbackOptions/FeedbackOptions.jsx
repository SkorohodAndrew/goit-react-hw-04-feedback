import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Button_List,
  Button_Container,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <Button_Container>
        {options.map(option => {
          return (
            <Button_List key={option}>
              <Button
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </Button>
            </Button_List>
          );
        })}
      </Button_Container>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
