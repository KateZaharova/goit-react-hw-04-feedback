import {Button} from "./FeedbackBtn/FeedbackBtn.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map((item) =>{
      return (
        <Button key={item} onClick={() => onLeaveFeedback(item)}>{item}</Button>
      )
    })}       
    </div>
  )  
}



