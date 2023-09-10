/*
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

 handleClickBtn = buttonType => {
    switch (buttonType) {
      case "good":
        this.setState(prevState => ({
          good: prevState.good += 1,
        }));
        break;
      case "neutral":
        this.setState(prevState => ({
           neutral: prevState.neutral += 1,
         }));
        break;
      case "bad":
        this.setState(prevState => ({
          bad: prevState.bad += 1,
        }));
        break;
      default:
        console.log("Empty action received.");
    }
  }
        

countTotalFeedback() {
    let total = 0;
    let array=[this.state.good,this.state.neutral,this.state.bad]
    array.forEach(item => {
      total += item;
    }); 
    return total;
  }
    
    countPositiveFeedbackPercentage() {
      let num = ((this.state.good / this.countTotalFeedback()) * 100); 
        if (this.countTotalFeedback() === 0) {
          return 0;
        } else
          return num.toFixed(0);
 }



  render() {
    let statisticOption;
    if (this.countTotalFeedback() === 0) {
      statisticOption = <Section title={"Statistics"} children={<Notification message="There is no feedback" />} />
    } else {
      statisticOption = <Section title={"Statistics"} children={<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />} />
    };
  }
  
  return (
    <Layout
       style={{
        //height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
        <h1>"Hello mentor!"</h1> 
        <Section title={"Please leave feedback"} children={<FeedbackOptions onLeaveFeedback={this.handleClickBtn} options={["good", "neutral", "bad"]} />} />
        {statisticOption}    
        <GlobalStyle />
    </Layout>
  );
  }
  */