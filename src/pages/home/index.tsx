import React from "react";
import { useRecoilState } from "recoil";
import { jwtState, nameState } from "../../recoil/login";
import { HomeRoot, Wrap } from "./styles";

const Home = () => {
  const [name] = useRecoilState(nameState);
  const [jwt] = useRecoilState(jwtState);

  return (
    <HomeRoot>
      <Wrap>
        <h4 style={{ color: "white" }}>항상 {name}님을 응원합니다 !</h4>
      </Wrap>
      <br />
      <Wrap>
        <h5 style={{ color: "white" }}>로그인 여부 : {jwt}</h5>
      </Wrap>
      <br />
      <Wrap>
        <h4 style={{ color: "white" }}>
          실제 개발 할 때는 인라인 스타일 보다는 styled-components 를
          사용해주세요.
        </h4>
      </Wrap>
    </HomeRoot>
  );
};

export default Home;
