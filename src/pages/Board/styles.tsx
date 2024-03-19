import styled from "styled-components";

export const ModalWrap = styled.div`
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const ModalBody = styled.div`
  position: fixed;
  top: 50%; //모달을 화면가운데 놓기위함.
  left: 50%;
  width: 1072px;
  height: 698px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자
  transform: translate(-50%, -50%); //모듈창열었을때 위치설정 가운데로
  display: flex;
  flex-direction: row;
`;

export const PostImg = styled.div<{ content?: string }>`
  width: 698px;
  height: 698px;
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-position: center;
  border-radius: 10px 0 0 10px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 328px;
`;
export const RightArrow = styled.img<{
  imgIndex: number;
  contentCount: number;
}>`
  width: 30px;
  height: 30px;
  margin-left: auto;
  display: ${(props) =>
    props.imgIndex === props.contentCount - 1 ? "none" : "block"};
  cursor: "pointer";
`;
export const LeftArrow = styled.img<{ imgIndex: number }>`
  width: 30px;
  height: 30px;
  display: ${(props) => (props.imgIndex === 0 ? "none" : "block")};
  cursor: pointer;
`;
export const ContentListDot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin-top: 304px;
`;
export const UserIdBox = styled.div`
  height: 65px;
  border-bottom: 1px solid #b2b2b2;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-right: 10px;
`;
export const UserIdText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #191919;
`;
export const PostRightBox = styled.div`
  width: 374px;
`;
export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PostTextBox = styled.div`
  padding: 15px;
  border-bottom: 1px solid #b2b2b2;
  height: 471px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
export const PostTexts = styled.div`
  width: 282px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 45px;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 30px;
  text-align: left;
`;

export const PostMiddle = styled.div`
  display: flex;
  margin-top: 15px;
  padding-left: 15px;
`;
export const PostIcon = styled.img`
  margin-right: 15px;
  width: 24px;
`;

export const LikeCount = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #191919;
  margin-bottom: 5px;
  margin-top: 10px;
`;
export const Time = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #b2b2b2;
  margin-bottom: 20px;
`;
export const LikeTimeBox = styled.div`
  padding-left: 15px;
  text-align: left;
`;
export const CommentBox = styled.div`
  border-top: 0.5px solid #b2b2b2;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CommentInput = styled.input`
  font-size: 14px;
  font-weight: 500;

  width: 295px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #b2b2b2;
  }
`;
export const CommentUpload = styled.div<{ disabled?: Boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.disabled ? "#b2ddff" : "#0492ff")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin-right: 20px;
`;
export const CommentFlexBox = styled.div`
  margin-left: 15px;
  display: flex;
  gap: 10px;
`;
export const CommentWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;
export const ModalBody2 = styled.div`
  position: fixed;
  top: 50%; //모달을 화면가운데 놓기위함.
  left: 50%;
  width: 448px;
  height: 450px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자
  transform: translate(-50%, -50%); //모듈창열었을때 위치설정 가운데로
  display: flex;
  flex-direction: column;
`;
export const PostMenu = styled.div`
  height: 50px;
  padding: 15px 0;
  border-bottom: 1px solid #cccccc;
  color: #191919;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
export const ModalBody3 = styled.div`
  position: fixed;
  top: 50%; //모달을 화면가운데 놓기위함.
  left: 50%;
  width: 448px;
  height: 223px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자
  transform: translate(-50%, -50%); //모듈창열었을때 위치설정 가운데로
  display: flex;
  flex-direction: column;
`;
export const NoticeTextBox = styled.div`
  height: 123px;
`;
export const NoticeTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #191919;
  margin-top: 40px;
  margin-bottom: 5px;
`;
export const NoticeText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;
export const NoticeButton = styled.div`
  height: 50px;
  border-top: 1px solid #cccccc;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 50px;
`;
