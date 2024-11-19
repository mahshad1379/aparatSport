import React from "react";
import {
  CommentsBoxStyle,
  CommentBoxContent,
  CommentName,
  CommentText,
  CommentInfo,
  CommentDate,
} from "./styles.js";

const CommentsBox = ({ name, text, date, logo }) => {
  return (
    <CommentsBoxStyle>
      <CommentBoxContent>
        <CommentName>{name}</CommentName>
        <CommentText>{text}</CommentText>
      </CommentBoxContent>
      <CommentInfo>
        <img src={logo} alt="logo" />
        <CommentDate>{date}</CommentDate>
      </CommentInfo>
    </CommentsBoxStyle>
  );
};

export default CommentsBox;
