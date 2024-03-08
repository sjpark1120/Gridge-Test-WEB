import styled from "styled-components";

export const Header = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.06);

  margin: 1rem;
  padding: 1rem;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  background-color: green;
  margin-left: 5rem;
  margin-right: 5rem;
`;

export const HeaderText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
`;

export const Button = styled.div`
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 0.6rem;
  background-color: blue;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
`;
