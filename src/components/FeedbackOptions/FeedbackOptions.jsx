import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonList,
  ButtonContainer,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonContainer>
        {options.map(option => {
          return (
            <ButtonList key={option}>
              <Button
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </Button>
            </ButtonList>
          );
        })}
      </ButtonContainer>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
