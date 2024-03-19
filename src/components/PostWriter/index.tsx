import React, { useState } from "react";
import imgIcon from "../../assets/image.png";
import backIcon from "../../assets/arrow-left.png";
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
  DragArea,
  DragAreaImg,
  DragAreabutton,
  DragAreabuttonLabel,
  DragAreatext,
  LeftArrow,
  ModalBody,
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
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../apis/firebase";
import FeedApi from "../../apis/Feed";

interface PostWriterProps {
  setVisibleWriter: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostWriter: React.FC<PostWriterProps> = ({
  setVisibleWriter,
}): JSX.Element => {
  const [isActive, setActive] = useState<boolean>(false); //드래그 상태
  const [files, setFiles] = useState<File[]>([]);
  const [imgs, setImgs] = useState<string[]>([]);
  const [isWritingPage, setIsWritingPage] = useState(false);
  const [notice, setNotice] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [postText, setPostText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      setVisibleWriter(false); // 클릭 이벤트가 모달 바깥부분을 클릭한 경우에만 호출
    }
  };

  const handleDragStart = (): void => {
    setActive(true);
  };

  const handleDragEnd = (): void => {
    setActive(false);
  };

  const handleDragOver = (e: any): void => {
    e.preventDefault();
  };

  const handleDrop = (e: any): void => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    const uploadedFiles: File[] = Array.from(e.dataTransfer.files);
    for (const file of uploadedFiles) {
      if (file.size > 5 * 1024 * 1024) {
        alert(
          "이미지 파일 용량이 너무 큽니다. 5MB 이하 이미지만 업로드 가능합니다."
        );
        setActive(false);
        return;
      }
      if (!file.type.includes("image")) {
        alert("이미지 파일이 아닙니다. 이미지 파일만 업로드 가능합니다.");
        setActive(false);
        return;
      }
    }
    const newImages = uploadedFiles.map((file: File) =>
      URL.createObjectURL(file)
    );
    setImgs((prevImgs) => [...prevImgs, ...newImages]);
    setFiles((prevFiles) => [...prevFiles, ...e.dataTransfer.files]);
    setActive(false);
  };

  const handleUpload = (e: any) => {
    if (!e.target.files) return;
    const uploadedFiles: File[] = Array.from(e.target.files);
    for (const file of uploadedFiles) {
      if (file.size > 5 * 1024 * 1024) {
        alert(
          "이미지 파일 용량이 너무 큽니다. 5MB 이하 이미지만 업로드 가능합니다."
        );
        return;
      }
      if (!file.type.includes("image")) {
        alert("이미지 파일이 아닙니다. 이미지 파일만 업로드 가능합니다.");
        return;
      }
    }
    const newImages = uploadedFiles.map((file) => URL.createObjectURL(file));

    setImgs((prevImgs) => [...prevImgs, ...newImages]);
    setFiles(e.target.files);
  };

  const OnclickBack = () => {
    setFiles([]);
    setImgs([]);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(imgs.length - 1, prevIndex + 1)
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const onClickUpload = async () => {
    setIsLoading(true);
    const userId = localStorage.getItem("userId");
    const serverId = localStorage.getItem("serverId");
    // 각 파일을 업로드하고 URL을 가져와서 배열에 저장
    const uploadedFilesUrls = [];
    for (const file of files) {
      const filename = `${userId}/${serverId}/${userId}_${Date.now()}.${file.name
        .split(".")
        .pop()}`;
      const uploadedFile = await uploadBytes(ref(storage, filename), file);
      const fileUrl = await getDownloadURL(uploadedFile.ref);
      uploadedFilesUrls.push(fileUrl);
    }
    try {
      const response = FeedApi.writePost({
        feedText: postText,
        contentUrls: uploadedFilesUrls,
      });
      console.log(response);
      setVisibleWriter(false);
      setIsLoading(false);
      window.location.reload();
    } catch {
      console.log("업로드 실패");
      alert("업로드 실패, 나중에 다시 시도하세요.");
      setIsLoading(false);
    }
  };
  return (
    <ModalWrap onClick={handleClickOutside}>
      {/* 게시글 작성 중 취소 모달 */}
      {notice ? (
        <ModalWrap>
          <ModalBody3>
            <NoticeTextBox>
              <NoticeTitle>게시물을 삭제하시겠어요?</NoticeTitle>
              <NoticeText>
                지금 나가면 수정 내용이 저장되지 않습니다.
              </NoticeText>
            </NoticeTextBox>
            <NoticeButton
              onClick={() => setVisibleWriter(false)}
              style={{ color: "#F04438" }}
            >
              삭제
            </NoticeButton>
            <NoticeButton onClick={() => setNotice(false)}>취소</NoticeButton>
          </ModalBody3>
        </ModalWrap>
      ) : null}
      {isLoading ? (
        <ModalWrap>
          <ModalBody3>
            <NoticeTextBox>
              <NoticeTitle style={{ marginTop: "83px" }}>
                게시 글 업로드 중...
              </NoticeTitle>
              <NoticeText>잠시만 기다려 주세요...</NoticeText>
            </NoticeTextBox>
          </ModalBody3>
        </ModalWrap>
      ) : null}
      {/* 게시글 이미지 선택창, 글 작성창  */}
      {!isWritingPage ? (
        <ModalBody>
          {imgs.length > 0 ? (
            <WriterTitleContainer
              style={{ justifyContent: "space-between", padding: "0 20px" }}
            >
              <img src={backIcon} width="24px" onClick={OnclickBack} />
              <WriterTitle>새 게시물 만들기</WriterTitle>
              <NextButton onClick={() => setIsWritingPage(true)}>
                다음
              </NextButton>
            </WriterTitleContainer>
          ) : (
            <WriterTitleContainer>
              <WriterTitle>새 게시물 만들기</WriterTitle>
            </WriterTitleContainer>
          )}
          <DragArea
            isActive={isActive}
            onDragEnter={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={handleDragEnd}
            onDrop={handleDrop}
          >
            {imgs.length > 0 ? (
              <img
                src={imgs[0]}
                alt="Uploaded Image"
                width="656px"
                height="656px"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <>
                <DragAreaImg src={imgIcon} />
                <DragAreatext>
                  사진과 동영상을 여기에 끌어다 놓으세요
                </DragAreatext>
                <DragAreabuttonLabel>
                  컴퓨터에서 선택
                  <DragAreabutton
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                    multiple={true}
                    onChange={handleUpload}
                  />
                </DragAreabuttonLabel>
              </>
            )}
          </DragArea>
        </ModalBody>
      ) : (
        <ModalBody2>
          <WriterTitleContainer
            style={{ justifyContent: "space-between", padding: "0 20px" }}
          >
            <img src={backIcon} width="24px" onClick={() => setNotice(true)} />
            <WriterTitle>새 게시물 만들기</WriterTitle>
            <NextButton onClick={onClickUpload}>공유</NextButton>
          </WriterTitleContainer>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <WritingBox>
              <PostImg content={imgs[currentImageIndex]}>
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
                    contentCount={imgs.length}
                  />
                </ArrowContainer>
                <ContentListDot>
                  {imgs.length == 1
                    ? null
                    : imgs.map((_, index) => (
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
                  <UserId>{localStorage.getItem("userId")}</UserId>
                </UserBox>
                <WritingInput
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  maxLength={2200}
                />
                <TextCount>{postText.length}/2,200</TextCount>
              </WritingArea>
              <PostSetting>
                <PostSettingText>위치 추가</PostSettingText>
                <img src={mapIcon} width="24px" />
              </PostSetting>
              <PostSetting>
                <PostSettingText>접근성</PostSettingText>
                <img src={downIcon} width="24px" />
              </PostSetting>
              <PostSetting>
                <PostSettingText>고급 설정</PostSettingText>
                <img src={downIcon} width="24px" />
              </PostSetting>
            </div>
          </div>
        </ModalBody2>
      )}
    </ModalWrap>
  );
};

export default PostWriter;
