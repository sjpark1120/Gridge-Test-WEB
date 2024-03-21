import React from "react";
import dummyProfileImg from "../../assets/story1.png";
import { CommentContainer, ProfileImg, Time, UserId } from "./styles";
interface FeedComment {
  commentText: string;
  writeUser: string;
}

const Comment: React.FC<FeedComment> = ({ commentText, writeUser }) => {
  return (
    <CommentContainer>
      <ProfileImg src={dummyProfileImg} />
      <div>
        <UserId>{writeUser}</UserId>
        {` `}
        <UserId style={{ fontWeight: "500" }}>{commentText}</UserId>
        <Time>9분전</Time>
      </div>
    </CommentContainer>
  );
};

export default Comment;
