import styled from "styled-components";

export const HomeRoot = styled.div`
  margin-top: 30px;
  display: flex;
  margin-left: 288px;
  gap: 104px;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
  }
`;
export const StoryContainer = styled.div`
  width: 520px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  display: flex;
  gap: 8px;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 15px;
`;
export const StoryBorder = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(209.83deg, #1570ef 7.74%, #9eeff4 94.51%);
  background-size: cover;
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Story = styled.img<{ img?: string }>`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;
export const MyProfile = styled.div`
  width: 416px;
  height: 130px;
  display: flex;
  align-items: center;
`;
export const MyProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 22px;
`;
export const MyId = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #191919;
  margin-bottom: 2px;
`;
export const MyName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;
export const RecommandContainer = styled.div`
  position: "relative";
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const RecommandBox = styled.div`
  width: 416px;
`;
export const RecommandFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RecommandTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #7f7f7f;
`;
export const RecommandMore = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #191919;
`;
export const RecommandProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 5px;
`;
export const RecommandUserId = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
`;
export const RecommandFollow = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #2e90fa;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const RecommandList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-direction: column;
`;
