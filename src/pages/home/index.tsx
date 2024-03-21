import React, { useEffect, useState } from "react";
import storyImg1 from "../../assets/story1.png";
import storyImg2 from "../../assets/story2.png";
import storyImg3 from "../../assets/story3.png";
import storyImg4 from "../../assets/story4.png";
import {
  FlexBox,
  HomeRoot,
  MyId,
  MyName,
  MyProfile,
  MyProfileImg,
  RecommandBox,
  RecommandContainer,
  RecommandFlexBox,
  RecommandFollow,
  RecommandList,
  RecommandMore,
  RecommandProfileImg,
  RecommandTitle,
  RecommandUserId,
  Story,
  StoryBorder,
  StoryContainer,
} from "./styles";
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

const Home = () => {
  const [userId, SetUserId] = useState("");
  const [realName, setRealName] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(999);
  const [isFetching, setFetching] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    firstGetFeeds();
  }, []);
  useEffect(() => {
    if (!isFirst) {
      handleGetFeeds();
    }
  }, [isFirst]);

  const firstGetFeeds = async () => {
    try {
      const response = await FeedApi.getFeeds(page);
      setPage(response.result.lastPage);
      console.log("마지막페이지설정", response.result.lastPage);
      setIsFirst(false);
    } catch {}
  };

  const handleGetFeeds = async () => {
    try {
      const response = await FeedApi.getFeeds(page);
      //console.log("피드:", response);
      console.log(page, "불러옴");
      setPosts(posts.concat(response.result.feedList.reverse()));
      setPage((prevPage) => prevPage - 1);
      setFetching(false);
    } catch {}
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight - 500) {
        //바닥닿기 500px전에 미리 불러옴
        setFetching(true);
      }
    };
    setFetching(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching && page > 0 && !isFirst) handleGetFeeds();
    else if (page == 0) setFetching(false);
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
      <RecommandContainer>
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
      </RecommandContainer>
    </HomeRoot>
  );
};

export default Home;
