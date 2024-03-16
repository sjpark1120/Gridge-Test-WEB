import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import storyImg1 from "../../assets/story1.png";
import storyImg2 from "../../assets/story2.png";
import storyImg3 from "../../assets/story3.png";
import storyImg4 from "../../assets/story4.png";
import { HomeRoot } from "./styles";
import FeedApi from "../../apis/Feed";
import FeedPost from "../../components/FeedPost";
import dummyProfileImg from "../../assets/dummyProfile.png";
import UserApi from "../../apis/User";

interface Post {
  id: number;
  contentList: [];
  createdAt: string;
  feedCommentCount: number;
  feedLoginId: string;
  feedText: string;
}

const StoryContainer = styled.div`
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
const StoryBorder = styled.div`
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
const Story = styled.img<{ img?: string }>`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;
const MyProfile = styled.div`
  width: 416px;
  height: 130px;
  display: flex;
  align-items: center;
`;
const MyProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 22px;
`;
const MyId = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #191919;
  margin-bottom: 2px;
`;
const MyName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;
const RecommandBox = styled.div`
  width: 416px;
`;
const RecommandFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RecommandTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #7f7f7f;
`;
const RecommandMore = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #191919;
`;
const RecommandProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 5px;
`;
const RecommandUserId = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
`;
const RecommandFollow = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #2e90fa;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
const RecommandList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-direction: column;
`;
const Home = () => {
  const [userId, SetUserId] = useState("");
  const [realName, setRealName] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const handleGetFeeds = useCallback(async () => {
    try {
      const response = await FeedApi.getFeeds(page);
      //console.log("피드:", response);
      console.log(page, "불러옴");
      setPosts(posts.concat(response.result.feedList));
      setPage(page + 1);
      setNextPage(response.result.lastPage >= page);
      setFetching(false);
    } catch {}
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight - 1000) {
        //바닥닿기 1000px전에 미리 불러옴
        setFetching(true);
      }
    };
    setFetching(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching && hasNextPage) handleGetFeeds();
    else if (!hasNextPage) setFetching(false);
  }, [isFetching]);

  const handleGetProfile = async () => {
    try {
      const loginId = localStorage.getItem("userId");
      if (!loginId) return;
      const response = await UserApi.getProfile(loginId);
      console.log(response);
      setRealName(response.result.realName);
      SetUserId(response.result.loginId);
    } catch {}
  };

  useEffect(() => {
    handleGetProfile();
  }, []);
  return (
    <HomeRoot>
      <div>
        <StoryContainer>
          <StoryBorder>
            <Story src={storyImg1} />
          </StoryBorder>
          <StoryBorder>
            <Story src={storyImg2} />
          </StoryBorder>
          <StoryBorder>
            <Story src={storyImg3} />
          </StoryBorder>
          <StoryBorder>
            <Story src={storyImg4} />
          </StoryBorder>
        </StoryContainer>
        <div>
          {posts.map((post) => (
            <FeedPost
              key={post.id}
              contentList={post.contentList}
              createdAt={post.createdAt}
              commentCount={post.feedCommentCount}
              userId={post.feedLoginId}
              postText={post.feedText}
              postId={post.id}
            />
          ))}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed" }}>
          <MyProfile>
            <MyProfileImg src={dummyProfileImg} />
            <div>
              <MyId>{userId}</MyId>
              <MyName>{realName}</MyName>
            </div>
          </MyProfile>
          <RecommandBox>
            <RecommandFlexBox>
              <RecommandTitle>회원님을 위한 추천</RecommandTitle>
              <RecommandMore>모두 보기</RecommandMore>
            </RecommandFlexBox>
            <RecommandList>
              <RecommandFlexBox>
                <FlexBox>
                  <RecommandProfileImg src={dummyProfileImg} />
                  <RecommandUserId>kendalljenner</RecommandUserId>
                </FlexBox>
                <RecommandFollow>팔로우</RecommandFollow>
              </RecommandFlexBox>
              <RecommandFlexBox>
                <FlexBox>
                  <RecommandProfileImg src={dummyProfileImg} />
                  <RecommandUserId>dewisandra</RecommandUserId>
                </FlexBox>
                <RecommandFollow>팔로우</RecommandFollow>
              </RecommandFlexBox>
              <RecommandFlexBox>
                <FlexBox>
                  <RecommandProfileImg src={dummyProfileImg} />
                  <RecommandUserId>tiit_smail</RecommandUserId>
                </FlexBox>
                <RecommandFollow>팔로우</RecommandFollow>
              </RecommandFlexBox>
              <RecommandFlexBox>
                <FlexBox>
                  <RecommandProfileImg src={dummyProfileImg} />
                  <RecommandUserId>window123</RecommandUserId>
                </FlexBox>
                <RecommandFollow>팔로우</RecommandFollow>
              </RecommandFlexBox>
            </RecommandList>
          </RecommandBox>
        </div>
      </div>
    </HomeRoot>
  );
};

export default Home;
