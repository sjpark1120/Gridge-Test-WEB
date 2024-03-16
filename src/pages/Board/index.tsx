import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const ModalWrap = styled.div`
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalBody = styled.div`
  position: fixed;
  top: 12%; //모달을 화면가운데 놓기위함.
  left: 50%;
  width: 1024px;
  height: 698px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자
  transform: translateX(-50%); //모듈창열었을때 위치설정 가운데로
  display: flex;
  flex-direction: column;
`;
const Board = () => {
  const [searchParams] = useSearchParams();

  return (
    <ModalWrap>
      <ModalBody>
        상세페이지<p>게시글 ID: {searchParams.get("boardId")}</p>
      </ModalBody>
    </ModalWrap>
  );
};

export default Board;
