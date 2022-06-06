/* eslint-disable default-case */
import React, { Component } from 'react';
import s from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import FeedbackStatistics from './FeedbackStatistics/FeedbackStatistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setFeedback = type => {
    switch (type) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
    }
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (total, feedbacksAmmount) => (total += feedbacksAmmount),
      0
    );

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div className={s.appWrapper}>
        <Section title="Please Leave feedback!">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.setFeedback}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() !== 0 ? (
            <FeedbackStatistics
              stat={this.state}
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given :(" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
