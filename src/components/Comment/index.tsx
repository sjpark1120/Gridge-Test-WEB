import React from "react";
import styled from "styled-components";
import dummyProfileImg from "../../assets/story1.png";
interface FeedComment {
  commentText: string;
  writeUser: string;
}
const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
`;
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserId = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #191919;
  margin-bottom: 3px;
`;
const Time = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #7f7f7f;
`;
const Comment: React.FC<FeedComment> = ({ commentText, writeUser }) => {
  return (
    <CommentContainer>
      <ProfileImg src={dummyProfileImg} />
      <div>
        <UserId>{`${writeUser} ${commentText}`}</UserId>
        <Time>9분전</Time>
      </div>
    </CommentContainer>
  );
};

export default Comment;
