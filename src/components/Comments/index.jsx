import React, { useRef, useState } from "react";
import COMMENT_ITEM from "../../constant/commentItem";
import CommentsBox from "./components/CommentsBox";
import RateBox from "./components/RateBox";

import {
  CommentStyle,
  CommentUpside,
  CommentContent,
  CommentContentText,
  CommentRateBox,
  CommentArrow,
  ArrowBox,
  CommentDownside,
} from "./styles.js";

const Comments = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef();
  const ITEM_WIDTH = 400;

  const HandleScroll = (scrollAmount) => {
    const newScrollPos = scrollPos + scrollAmount;
    setScrollPos(newScrollPos);
    containerRef.current.scrollLeft = newScrollPos;
  };

  return (
    <CommentStyle>
      <CommentUpside>
        <CommentContent>
          <CommentContentText>نظر کاربران آپارات اسپرت</CommentContentText>
          <CommentRateBox>
            <RateBox logo={"/assets/img/comments/Baazar logo.png"} point={4.6} />
            <RateBox logo={"/assets/img/comments/Myket Logo.png"} point={4.7} />
          </CommentRateBox>
        </CommentContent>
        <CommentArrow>
          <ArrowBox
            onClick={() => {
              HandleScroll(ITEM_WIDTH);
            }}
          >
            {console.log(scrollPos)}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.51192 19.5692C8.19743 19.2996 8.161 18.8261 8.43057 18.5116L14.0122 11.9997L8.43057 5.48784C8.161 5.17334 8.19743 4.69987 8.51192 4.4303C8.82641 4.16073 9.29989 4.19715 9.56946 4.51165L15.5695 11.5116C15.8102 11.7925 15.8102 12.207 15.5695 12.4878L9.56946 19.4878C9.29989 19.8023 8.82641 19.8388 8.51192 19.5692Z"
                fill="#78C248"
              />
            </svg>
          </ArrowBox>
          <ArrowBox
            onClick={() => {
              HandleScroll(-ITEM_WIDTH);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4881 19.5692C15.8026 19.2996 15.839 18.8261 15.5694 18.5116L9.9878 11.9997L15.5694 5.48784C15.839 5.17334 15.8026 4.69987 15.4881 4.4303C15.1736 4.16073 14.7001 4.19715 14.4305 4.51165L8.43054 11.5116C8.1898 11.7925 8.1898 12.207 8.43054 12.4878L14.4305 19.4878C14.7001 19.8023 15.1736 19.8388 15.4881 19.5692Z"
                fill="#78C248"
              />
            </svg>
          </ArrowBox>
        </CommentArrow>
      </CommentUpside>
      <CommentDownside ref={containerRef}>
        {COMMENT_ITEM.map((item) => {
          return (
            <CommentsBox
              name={item.name}
              text={item.text}
              date={item.date}
              logo={item.logo}
            />
          );
        })}
      </CommentDownside>
    </CommentStyle>
  );
};

export default Comments;
