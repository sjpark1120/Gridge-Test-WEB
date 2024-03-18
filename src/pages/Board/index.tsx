import React, { useCallback, useEffect, useRef, useState } from "react";
import rightArrowIcon from "../../assets/rigntBtn.png";
import leftArrowIcon from "../../assets/leftBtn.png";
import dotIcon from "../../assets/dot.png";
import dotBlueIcon from "../../assets/dot_blue.png";
import dummyProfileImg from "../../assets/dummyProfile.png";
import moreDotIcon from "../../assets/dot_more.png";
import likeIcon from "../../assets/heart_black.png";
import commentIcon from "../../assets/message-circle.png";
import bookmarkIcon from "../../assets/bookmark.png";
import FeedApi from "../../apis/Feed";
import Comment from "../../components/Comment";
import {
  ArrowContainer,
  CommentBox,
  CommentFlexBox,
  CommentInput,
  CommentUpload,
  CommentWrap,
  ContentListDot,
  LeftArrow,
  LikeCount,
  LikeTimeBox,
  ModalBody,
  ModalWrap,
  PostIcon,
  PostImg,
  PostMiddle,
  PostRightBox,
  PostTextBox,
  PostTexts,
  RightArrow,
  Time,
  UserIdBox,
  UserIdText,
  UserImg,
  UserInfoBox,
} from "./styles";

interface FeedPostProps {
  contentList: any[];
  createdAt: string;
  userId: string;
  postText: string;
  postId: number;
  setIsPostVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FeedCommentProps {
  id: number;
  commentText: string;
  writeUserLoginId: string;
}

const Board: React.FC<FeedPostProps> = ({
  contentList,
  createdAt,
  userId,
  postText,
  postId,
  setIsPostVisible,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<FeedCommentProps[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);
  const postTextBoxRef = useRef<HTMLDivElement>(null);
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

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      setIsPostVisible(false); // 클릭 이벤트가 모달 바깥부분을 클릭한 경우에만 호출
    }
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
    } else if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else {
      return `${minutes}분 전`;
    }
  };
  const handleGetComments = useCallback(
    async (feedId: number, page: number) => {
      try {
        const response = await FeedApi.getComments(feedId, page);
        setComments(comments.concat(response.result.commentList));
        //console.log("commentList", response.result);
        console.log("comments", comments);
        console.log(page, "댓글불러옴");
        setPage(page + 1);
        setNextPage(response.result.lastPage >= page);
        setFetching(false);
      } catch {
        console.log("댓글 불러오기 실패이잉");
      }
    },
    [page]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!postTextBoxRef.current) return;
      const { scrollTop, offsetHeight, scrollHeight } = postTextBoxRef.current;
      if (scrollTop + offsetHeight >= scrollHeight - 100) {
        //바닥닿기 100px전에 미리 불러옴
        setFetching(true);
      }
    };
    if (!postTextBoxRef.current) return;
    setFetching(true);
    postTextBoxRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (!postTextBoxRef.current) return;
      postTextBoxRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFetching && hasNextPage) handleGetComments(postId, page);
    else if (!hasNextPage) setFetching(false);
  }, [isFetching]);

  const handleWriteComment = async (feedId: number, commentText: string) => {
    try {
      const response = await FeedApi.writeComments(feedId, commentText);
      //handleGetComments(feedId, page); // 댓글목록 새로 불러옴
      const writeUserLoginId = localStorage.getItem("userId");
      console.log(writeUserLoginId);
      if (writeUserLoginId !== null) {
        setComments(
          comments.concat({
            id: response.result.feedCommentId,
            commentText,
            writeUserLoginId,
          })
        );
        console.log("댓글바로업데이트");
      }
      //console.log(response);
    } catch {
      console.log("댓글 쓰기 실패이잉");
    }
  };
  const onClcikCommentUpload = () => {
    if (comment.length === 0) return; // 댓글 내용이 없으면 클릭 무시
    handleWriteComment(postId, comment);
    setComment("");
  };
  // useEffect(() => {
  //   handleGetComments(postId);
  // }, []);
  return (
    <ModalWrap onClick={handleClickOutside}>
      <ModalBody>
        <PostImg content={contentList[currentImageIndex].contentUrl}>
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
        </PostImg>
        <PostRightBox>
          <UserIdBox>
            <UserInfoBox>
              <UserImg src={dummyProfileImg} />
              <UserIdText>{userId}</UserIdText>
            </UserInfoBox>
            <img src={moreDotIcon} width="24px" />
          </UserIdBox>
          <PostTextBox ref={postTextBoxRef}>
            <UserInfoBox>
              <UserImg src={dummyProfileImg} />
              <UserIdText>{userId}</UserIdText>
            </UserInfoBox>
            <PostTexts>
              {postText}
              <Time style={{ marginTop: "5px" }}>{renderTimeAgo()}</Time>
            </PostTexts>

            <CommentWrap>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  commentText={comment.commentText}
                  writeUser={comment.writeUserLoginId}
                />
              ))}
            </CommentWrap>
          </PostTextBox>
          <PostMiddle>
            <PostIcon src={likeIcon} />
            <PostIcon src={commentIcon} />
            <PostIcon src={bookmarkIcon} style={{ marginLeft: "auto" }} />
          </PostMiddle>
          <LikeTimeBox>
            <LikeCount>좋아요 10개</LikeCount>
            <Time>{renderTimeAgo()}</Time>
          </LikeTimeBox>
          <CommentBox>
            <CommentFlexBox>
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
        </PostRightBox>
      </ModalBody>
    </ModalWrap>
  );
};

export default Board;
