import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statictics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButton = event => {
    switch (event) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  // onClickButton = event => {
  //   this.setState(prev => ({
  //     [event]: prev[event] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  // };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  // const { good, neutral, bad } = this.state;
  return (
    <Container>
      <Section title="Pleas leave feedback">
        <FeedbackOptions
          options={[`good`, `neutral`, `bad`]}
          onLeaveFeedback={onClickButton}
        />
      </Section>

      <Section title="Statistics">
        <Statictics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};
