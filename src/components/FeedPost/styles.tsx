import styled from "styled-components";

export const PostContainer = styled.div`
  width: 520px;
  /* height: 757px; */
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const PostImg = styled.div<{ content?: string }>`
  width: 519px;
  height: 520px;
  background-image: url(${(props) => props.content});
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;
export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
`;
export const UserIdText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #ffffff;
`;
export const PostHearder = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 17px;
  align-items: center;
  justify-content: space-between;
`;
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const PostMiddle = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 15px;
`;
export const PostIcon = styled.img`
  margin-right: 15px;
  width: 24px;
`;
export const ContentListDot = styled.span`
  margin-left: 153px;
  display: flex;
  align-items: center;
  gap: 2px;
`;
export const PostInfoBox = styled.div`
  margin-top: 15px;
  padding-left: 16px;
  padding-right: 16px;
`;
export const LikeCount = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #191919;
  margin-bottom: 5px;
`;
export const UserId = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #191919;
  margin-right: 5px;
`;
export const PostText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #191919;
`;
export const MoreButton = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #7f7f7f;
  cursor: pointer;
`;
export const MoreComment = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #999999;
  cursor: pointer;
`;
export const Time = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #b2b2b2;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const CommentBox = styled.div`
  border-top: 0.5px solid #b2b2b2;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CommentProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;
export const CommentInput = styled.input`
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
export const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 190px;
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
