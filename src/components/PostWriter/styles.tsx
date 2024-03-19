import styled from "styled-components";

export const ModalWrap = styled.div`
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

export const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 656px;
  height: 716px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;
export const WriterTitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #b2b2b2;
  align-items: center;
  justify-content: center;
`;
export const WriterTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #191919;
`;
export const DragArea = styled.label<{ isActive?: boolean }>`
  text-align: center;
  border-radius: 0 0 10px 10px;
  height: 656px;
  background-color: ${(props) => (props.isActive ? "#d3d3d3" : "#ffffff")};
`;
export const DragAreaImg = styled.img`
  width: 95px;
  height: 95px;
  margin-top: 220px;
`;
export const DragAreatext = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #7f7f7f;
  margin-top: 20px;
`;
export const DragAreabutton = styled.input`
  display: none;
`;
export const DragAreabuttonLabel = styled.span`
  display: inline-block;
  width: 130px;
  height: 35px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 36px;
  color: #ffffff;
  background-color: #2e90fa;
  line-height: 35px;
  cursor: pointer;
`;
export const NextButton = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2e90fa;
  cursor: pointer;
`;

export const ModalBody2 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1008px;
  height: 716px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

export const PostImg = styled.div<{ content?: string }>`
  width: 656px;
  height: 656px;
  background-image: url(${(props) => props.content});
  background-size: cover;
  background-position: center;
  border-radius: 0 0 0 10px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 283px;
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
  margin-top: 307px;
`;
export const WritingBox = styled.div`
  display: flex;
`;
export const WritingArea = styled.div`
  height: 300px;
  border-bottom: 1px solid #b2b2b2;
  padding: 20px;
`;
export const UserBox = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-right: 11px;
`;
export const UserId = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #191919;
`;
export const WritingInput = styled.textarea`
  width: 100%;
  height: 192px;
  resize: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #191919;
`;
export const TextCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #b2b2b2;
  text-align: right;
`;
export const PostSetting = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 13px 20px;
  border-bottom: 1px solid #b2b2b2;
`;
export const PostSettingText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #191919;
`;

export const ModalBody3 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 448px;
  height: 223px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translate(-50%, -50%);
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
