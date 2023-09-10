import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
//import { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";
import { useState, useEffect } from "react";


export const AppNew =() => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const handleClickBtn = buttonType => {
    switch (buttonType) {
      case "good":
        setGood(prevItems => prevItems + 1);
        break;
      case "neutral":
        setNeutral(prevItems => prevItems + 1);
        break;
      case "bad":
        setBad(prevItems => prevItems + 1);
        break;
      default:
        console.log("Empty action received.");
    }
  }
  

  const countTotalFeedback = () => {
  let total = 0;
    let array=[good,neutral,bad]
    array.forEach(item => {
      total += item;
    }); 
    return total;
}; 
  
    
  const countPositiveFeedbackPercentage = () => {
    let num = ((good / countTotalFeedback()) * 100);
    if (countTotalFeedback() === 0) {
      return 0;
    } else
      return num.toFixed(0);
  };
  
let statisticOption;
    if (countTotalFeedback() === 0) {
      statisticOption =
        <Section title={"Statistics"}
          children={<Notification message="There is no feedback" />} />
    } else {
      statisticOption =
        <Section title={"Statistics"}
        children={<Statistics good={good} neutral={neutral} bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()} />} />
    };


  return (
     <Layout
       style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
        <h1>"Hello mentor!"</h1> 
      <Section title={"Please leave feedback"}
        children={<FeedbackOptions onLeaveFeedback={handleClickBtn}
          options={["good", "neutral", "bad"]} />} />
        {statisticOption}    
        <GlobalStyle />
    </Layout>
  );
}