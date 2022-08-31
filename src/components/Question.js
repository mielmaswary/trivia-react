import React from "react";
import { Markup } from "react-render-markup";

const Question = (props) => {
  const question = props.question;
  return <Markup markup={question} />;
};

export default Question;
