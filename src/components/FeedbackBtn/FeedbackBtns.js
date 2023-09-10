import {Button} from "../FeedbackBtn/FeedbackBtn.styled";
import { Component } from "react";


export class FeedbackBtns extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClickGood = () => {
    console.log("good");
    this.setState(prevState => ({
      good: prevState.good += 1,
    }))
  };

  handleClickNeutral = () => {
    console.log("neutral");
    this.setState(prevState => ({
      neutral: prevState.neutral += 1,
    }))
  };
  
  handleClickBad = () => {
    console.log("bad");
    this.setState(prevState => ({
      bad: prevState.bad += 1,
    }))
  };

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
    } else {
      return num.toFixed(0);
    }
  }
  

  

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Button onClick={this.handleClickGood}>Good</Button>
        <Button onClick={this.handleClickNeutral}>Neutral</Button>
        <Button onClick={this.handleClickBad}>Bad</Button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>PositiveFeedback: {this.countPositiveFeedbackPercentage()}%</p>  
      </div>
    )
  }
}
