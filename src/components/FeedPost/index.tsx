import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummyProfileImg from "../../assets/dummyProfile.png";
import moreIcon from "../../assets/More Circle.png";
import likeIcon from "../../assets/heart_black.png";
import commentIcon from "../../assets/message-circle.png";
import dotIcon from "../../assets/dot.png";
import dotBlueIcon from "../../assets/dot_blue.png";
import bookmarkIcon from "../../assets/bookmark.png";
import rightArrowIcon from "../../assets/rigntBtn.png";
import leftArrowIcon from "../../assets/leftBtn.png";
import FeedApi from "../../apis/Feed";
import Comment from "../Comment";
import { Link } from "react-router-dom";

interface FeedPostProps {
  contentList: any[];
  createdAt: string;
  commentCount: number;
  userId: string;
  postText: string;
  postId: number;
}

interface FeedCommentProps {
  id: number;
  commentText: string;
  writeUserLoginId: string;
}

const PostContainer = styled.div`
  width: 520px;
  /* height: 757px; */
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const PostImg = styled.div<{ content?: string }>`
  width: 519px;
  height: 520px;
  background-image: url(${(props) => props.content});
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;
const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
`;
const UserIdText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #ffffff;
`;
const PostHearder = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 17px;
  align-items: center;
  justify-content: space-between;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const PostMiddle = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 15px;
`;
const PostIcon = styled.img`
  margin-right: 15px;
  width: 24px;
`;
const ContentListDot = styled.span`
  margin-left: 153px;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const PostInfoBox = styled.div`
  margin-top: 15px;
  padding-left: 16px;
  padding-right: 16px;
`;
const LikeCount = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #191919;
  margin-bottom: 5px;
`;
const UserId = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #191919;
  margin-right: 5px;
`;
const PostText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #191919;
`;
const MoreButton = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #7f7f7f;
  cursor: pointer;
`;
const MoreComment = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #999999;
  cursor: pointer;
`;
const Time = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #b2b2b2;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const CommentBox = styled.div`
  border-top: 0.5px solid #b2b2b2;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CommentProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;
const CommentInput = styled.input`
  font-size: 14px;
  font-weight: 500;

  width: 400px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #b2b2b2;
  }
`;
const CommentUpload = styled.div<{ disabled?: Boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.disabled ? "#b2ddff" : "#0492ff")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin-right: 20px;
`;
const CommentFlexBox = styled.div`
  margin-left: 15px;
  display: flex;
  gap: 10px;
`;
const CommentWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;
const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 190px;
`;
const RightArrow = styled.img<{ imgIndex: number; contentCount: number }>`
  width: 30px;
  height: 30px;
  margin-left: auto;
  display: ${(props) =>
    props.imgIndex === props.contentCount - 1 ? "none" : "block"};
  cursor: "pointer";
`;
const LeftArrow = styled.img<{ imgIndex: number }>`
  width: 30px;
  height: 30px;
  display: ${(props) => (props.imgIndex === 0 ? "none" : "block")};
  cursor: pointer;
`;
const FeedPost: React.FC<FeedPostProps> = ({
  contentList,
  createdAt,
  commentCount,
  userId,
  postText,
  postId,
}) => {
  const [isMoreVisible, setIsMoreVisible] = useState(true);
  const [comment, setComment] = useState("");

  const [truncatedPostText, setTruncatedPostText] = useState(
    userId.length + postText.length > 100
      ? postText.slice(0, 100) + "..."
      : postText
  );
  const [comments, setComments] = useState<FeedCommentProps[]>([]);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [totalCommentCount, setTotalCommentCount] = useState(commentCount);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(contentList.length - 1, prevIndex + 1)
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const renderTimeAgo = () => {
    const currentTime = new Date();
    const postTime = new Date(createdAt);
    const timeDiff = Math.abs(currentTime.getTime() - postTime.getTime());
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) {
      return `${postTime.getMonth() + 1}월 ${postTime.getDate()}일`;
    } else if (days > 30) {
      return `${days}일 전`;
    } else if (hours > 24) {
      return `${hours}시간 전`;
    } else {
      return `${minutes}분 전`;
    }
  };

  const handleMoreClick = () => {
    setTruncatedPostText(postText);
    setIsMoreVisible(false);
  };

  const handleGetComments = async (feedId: number) => {
    try {
      const response = await FeedApi.getComments(feedId);
      setComments(response.result.commentList);
      //console.log("commentList", response.result);
      setIsCommentsOpen(response.result.totalCount < 3);
    } catch {
      console.log("댓글 불러오기 실패이잉");
    }
  };
  const handleGetComments2 = async (feedId: number) => {
    try {
      const response = await FeedApi.getComments(feedId);
      setComments(response.result.commentList);
      //console.log("commentList", response.result);
    } catch {
      console.log("댓글 불러오기 실패이잉");
    }
  };

  const handleWriteComment = async (feedId: number, commentText: string) => {
    try {
      const response = await FeedApi.writeComments(feedId, commentText);
      handleGetComments2(feedId); // 댓글목록 새로 불러옴(댓글접히는거방지)
      console.log(response);
    } catch {
      console.log("댓글 쓰기 실패이잉");
    }
  };

  useEffect(() => {
    handleGetComments(postId);
  }, []);

  const onClcikCommentUpload = () => {
    if (comment.length === 0) return; // 댓글 내용이 없으면 클릭 무시
    handleWriteComment(postId, comment);
    setTotalCommentCount(totalCommentCount + 1);
    setComment("");
  };

  return (
    <PostContainer>
      <PostImg content={contentList[currentImageIndex].contentUrl}>
        <PostHearder>
          <UserBox>
            <ProfileImg src={dummyProfileImg} />
            <UserIdText>{userId}</UserIdText>
          </UserBox>
          <img src={moreIcon} width="20px" />
        </PostHearder>
        <ArrowContainer>
          <LeftArrow
            src={leftArrowIcon}
            onClick={handlePrevClick}
            imgIndex={currentImageIndex}
          />
          <RightArrow
            src={rightArrowIcon}
            onClick={handleNextClick}
            imgIndex={currentImageIndex}
            contentCount={contentList.length}
          />
        </ArrowContainer>
      </PostImg>
      <PostMiddle>
        <PostIcon src={likeIcon} />
        <Link to={`/board?boardId=${postId}`}>
          <PostIcon src={commentIcon} />
        </Link>
        <ContentListDot>
          {contentList.length == 1
            ? null
            : contentList.map((_, index) => (
                <img
                  key={index}
                  src={index === currentImageIndex ? dotBlueIcon : dotIcon}
                  width="5px"
                  onClick={() => handleDotClick(index)}
                />
              ))}
        </ContentListDot>
        <PostIcon src={bookmarkIcon} style={{ marginLeft: "auto" }} />
      </PostMiddle>
      <PostInfoBox>
        <LikeCount>좋아요 10개</LikeCount>
        <div style={{ marginBottom: "5px" }}>
          <UserId>{userId}</UserId>
          <PostText>{truncatedPostText}</PostText>
          {postText.length > 100 &&
            (isMoreVisible ? (
              <MoreButton onClick={handleMoreClick}>더보기</MoreButton>
            ) : null)}
        </div>
        {isCommentsOpen ? (
          <>
            <Time>{renderTimeAgo()}</Time>
            <CommentWrap>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  commentText={comment.commentText}
                  writeUser={comment.writeUserLoginId}
                />
              ))}
            </CommentWrap>
          </>
        ) : (
          <>
            <MoreComment onClick={() => setIsCommentsOpen(true)}>
              댓글 {totalCommentCount}개 모두 보기
            </MoreComment>
            <Time>{renderTimeAgo()}</Time>
          </>
        )}
      </PostInfoBox>
      <CommentBox>
        <CommentFlexBox>
          <CommentProfileImg src={dummyProfileImg} alt="프로필사진" />
          <CommentInput
            placeholder="댓글 달기..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </CommentFlexBox>
        <CommentUpload
          onClick={onClcikCommentUpload}
          disabled={!(comment.length > 0)}
        >
          게시
        </CommentUpload>
      </CommentBox>
    </PostContainer>
  );
};

export default FeedPost;
