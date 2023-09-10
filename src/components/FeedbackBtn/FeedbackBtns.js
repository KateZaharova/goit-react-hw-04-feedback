import {Button} from "../FeedbackBtn/FeedbackBtn.styled";
//import { Component } from "react";
import { useState } from "react";


export const FeedbackBtns = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const handleClickGood = () => {
    console.log("good");
  setGood(prevState => prevState + 1);
  };

const handleClickNeutral = () => {
    console.log("neutral");
    setNeutral(prevState => prevState + 1);
  };
  
const handleClickBad = () => {
    console.log("bad");
    setBad(prevState => prevState + 1);
  };

const countTotalFeedback=()=> {
    let total = 0;
    let array=[good, neutral, bad]
    array.forEach(item => {
      total += item;
    }); 
    return total;
  }
    
const countPositiveFeedbackPercentage=()=> {
    let num = ((good / countTotalFeedback()) * 100); 
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return num.toFixed(0);
    }
  }
    

return (
      <div>
        <h2>Please leave feedback</h2>
        <Button onClick={handleClickGood}>Good</Button>
        <Button onClick={handleClickNeutral}>Neutral</Button>
        <Button onClick={handleClickBad}>Bad</Button>

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>PositiveFeedback: {this.countPositiveFeedbackPercentage()}%</p>  
      </div>
    )
}
