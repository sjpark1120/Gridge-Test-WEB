import React, { useState } from "react";
import rightArrowIcon from "../../assets/rigntBtn.png";
import leftArrowIcon from "../../assets/leftBtn.png";
import dotIcon from "../../assets/dot.png";
import dotBlueIcon from "../../assets/dot_blue.png";
import mapIcon from "../../assets/map-pin.png";
import downIcon from "../../assets/chevron-down.png";
import dummyProfileImg from "../../assets/dummyProfile.png";
import {
  ArrowContainer,
  ContentListDot,
  LeftArrow,
  ModalBody2,
  ModalBody3,
  ModalWrap,
  NextButton,
  NoticeButton,
  NoticeText,
  NoticeTextBox,
  NoticeTitle,
  PostImg,
  PostSetting,
  PostSettingText,
  RightArrow,
  TextCount,
  UserBox,
  UserId,
  UserImg,
  WriterTitle,
  WriterTitleContainer,
  WritingArea,
  WritingBox,
  WritingInput,
} from "./styles";
import FeedApi from "../../apis/Feed";
interface FeedPostProps {
  contentList: any[];
  userId: string;
  postText: string;
  postId: number;
  setIsEditVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPostTextState: React.Dispatch<React.SetStateAction<string>>;
}
const PostEdit: React.FC<FeedPostProps> = ({
  contentList,
  userId,
  postText,
  postId,
  setIsEditVisible,
  setPostTextState,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [editPostText, setEditPostText] = useState(postText);
  const [isCancleVisible, setIsCanclevisible] = useState(false);

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

  const handleEdit = async () => {
    try {
      const response = await FeedApi.updatePost(postId, editPostText);
      console.log("게시글 수정", response);
      setPostTextState(editPostText);
      setIsEditVisible(false);
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <ModalWrap>
      {isCancleVisible ? (
        <ModalWrap>
          <ModalBody3>
            <NoticeTextBox>
              <NoticeTitle>게시물을 수정을 취소하시겠어요?</NoticeTitle>
              <NoticeText>
                지금 나가면 수정 내용이 저장되지 않습니다.
              </NoticeText>
            </NoticeTextBox>
            <NoticeButton
              style={{ color: "#F04438" }}
              onClick={() => setIsEditVisible(false)}
            >
              수정 내용 삭제
            </NoticeButton>
            <NoticeButton onClick={() => setIsCanclevisible(false)}>
              취소
            </NoticeButton>
          </ModalBody3>
        </ModalWrap>
      ) : null}
      <ModalBody2>
        <WriterTitleContainer
          style={{ justifyContent: "space-between", padding: "0 20px" }}
        >
          <NextButton
            onClick={() => setIsCanclevisible(true)}
            style={{ color: "#7F7F7F" }}
          >
            취소
          </NextButton>
          <WriterTitle>정보 수정</WriterTitle>
          <NextButton onClick={handleEdit}>완료</NextButton>
        </WriterTitleContainer>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <WritingBox>
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
                        src={
                          index === currentImageIndex ? dotBlueIcon : dotIcon
                        }
                        width="6px"
                        onClick={() => handleDotClick(index)}
                        style={{ objectFit: "cover" }}
                      />
                    ))}
              </ContentListDot>
            </PostImg>
          </WritingBox>
          <div style={{ width: "100%" }}>
            <WritingArea>
              <UserBox>
                <UserImg src={dummyProfileImg} />
                <UserId>{userId}</UserId>
              </UserBox>
              <WritingInput
                value={editPostText}
                onChange={(e) => setEditPostText(e.target.value)}
                maxLength={2200}
              />
              <TextCount>{editPostText.length}/2,200</TextCount>
            </WritingArea>
            <PostSetting>
              <PostSettingText>위치 추가</PostSettingText>
              <img src={mapIcon} width="24px" />
            </PostSetting>
            <PostSetting>
              <PostSettingText>접근성</PostSettingText>
              <img src={downIcon} width="24px" />
            </PostSetting>
          </div>
        </div>
      </ModalBody2>
    </ModalWrap>
  );
};

export default PostEdit;
