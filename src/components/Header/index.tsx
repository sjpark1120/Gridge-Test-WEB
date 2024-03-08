import React from "react";
import { Link, useNavigate } from "react-router-dom";
import packageJson from "../../../package.json";
import { Button, Header, HeaderText, Wrap } from "./styles";

const AppHeader = () => {
  const navigate = useNavigate();

  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)
  // const [visible, setVisible] = useState(false)

  return (
    <Header>
      <Wrap>
        <svg width={30}>
          <image href="../../assets/neordinary-logo.svg" />
        </svg>
        <HeaderText>
          {process.env.REACT_APP_ENV !== "production" ? (
            <>
              REACT_APP_ENV : ${process.env.REACT_APP_ENV}
              <br />
              REACT_APP_API : ${process.env.REACT_APP_API}
              <br />
              프로젝트 : ${packageJson.name}
              <br />
              설명 : ${packageJson.description}
              <br />
              버전 : ${packageJson.version}
            </>
          ) : (
            ""
          )}
        </HeaderText>
      </Wrap>
      <Wrap>
        <Link to="/login">
          <Button>로그아웃</Button>
        </Link>
        <Button
          onClick={() => {
            // replace true 는 뒤로가기시 이전 페이지로 안가짐
            navigate("/dashboard", { replace: true });
          }}
        >
          대시보드로 화면 전환
        </Button>
        <Button
          onClick={() => {
            // replace false (혹은 생략) 는 뒤로가기시 이전 페이지 가짐
            navigate("/");
          }}
        >
          홈
        </Button>
      </Wrap>
    </Header>
  );
};

export default AppHeader;
