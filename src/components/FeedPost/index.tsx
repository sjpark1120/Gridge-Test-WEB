import React, { useEffect, useState } from "react";
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
import Board from "../../pages/Board";
import {
  ArrowContainer,
  CommentBox,
  CommentFlexBox,
  CommentInput,
  CommentProfileImg,
  CommentUpload,
  CommentWrap,
  ContentListDot,
  LeftArrow,
  LikeCount,
  MoreButton,
  MoreComment,
  PostContainer,
  PostHearder,
  PostIcon,
  PostImg,
  PostInfoBox,
  PostMiddle,
  PostText,
  ProfileImg,
  RightArrow,
  Time,
  UserBox,
  UserId,
  UserIdText,
} from "./styles";

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

const FeedPost: React.FC<FeedPostProps> = ({
  contentList,
  createdAt,
  commentCount,
  userId,
  postText,
  postId,
}) => {
  // const navigate = useNavigate();
  const [isPostVisible, setIsPostVisible] = useState(false);

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
      const response = await FeedApi.getComments(feedId, 1);
      setComments(response.result.commentList);
      //console.log("commentList", response.result);
      setTotalCommentCount(response.result.totalCount);
      setIsCommentsOpen(response.result.totalCount < 3);
    } catch {
      console.log("댓글 불러오기 실패이잉");
    }
  };
  const handleGetComments2 = async (feedId: number) => {
    try {
      const response = await FeedApi.getComments(feedId, 1);
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
  }, [isPostVisible]);

  const onClcikCommentUpload = () => {
    if (comment.length === 0) return; // 댓글 내용이 없으면 클릭 무시
    handleWriteComment(postId, comment);
    setTotalCommentCount(totalCommentCount + 1);
    setComment("");
  };
  const onClickCommentButton = () => {
    setIsPostVisible(true);
    //navigate(`/board?boardId=${postId}`);
  };
  useEffect(() => {
    //모달창 열렸을 때 뒷배경 스크롤 방지
    if (isPostVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPostVisible]);
  return (
    <>
      {isPostVisible ? (
        <Board
          postId={postId}
          contentList={contentList}
          createdAt={createdAt}
          userId={userId}
          postText={postText}
          setIsPostVisible={setIsPostVisible}
        />
      ) : null}
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
          {/* <Link to={`/board?boardId=${postId}`}> */}
          <PostIcon
            src={commentIcon}
            onClick={onClickCommentButton}
            style={{ cursor: "pointer" }}
          />
          {/* </Link> */}
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
    </>
  );
};

export default FeedPost;
