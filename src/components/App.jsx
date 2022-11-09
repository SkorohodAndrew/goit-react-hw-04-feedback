import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statictics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onClickGood = () => {
  //   this.setState(prev => ({
  //     good: prev.good + 1,
  //   }));
  // };
  // onClickNeutral = () => {
  //   this.setState(prev => ({
  //     neutral: prev.neutral + 1,
  //   }));
  // };
  // onClickBad = () => {
  //   this.setState(prev => ({
  //     bad: prev.bad + 1,
  //   }));
  // };

  onClickButton = event => {
    this.setState(prev => ({
      [event]: prev[event] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
            options={[`good`, `neutral`, `bad`]}
            onLeaveFeedback={this.onClickButton}
            // onClickGood={this.onClickGood}
            // onClickNeutral={this.onClickNeutral}
            // onClickBad={this.onClickBad}
          />
        </Section>

        <Section title="Statistics">
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
