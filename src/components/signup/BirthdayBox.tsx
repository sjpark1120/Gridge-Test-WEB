import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cakeImg from "../../assets/cake.png";
import dropdownIcon from "../../assets/chevron-down.png";
import dropdownCheckIcon from "../../assets/check.png";
interface Props {
  onNext: () => void;
  onPrev: () => void;
}
const LoginBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  background-color: white;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
`;
const LogoImg = styled.div`
  width: 238px;
  height: 170px;
  background-size: cover;
  background-image: url(${cakeImg});
  margin-top: 60px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #191919;
`;
const Text1 = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #7f7f7f;
`;
const Text2 = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 500;
  color: #2e90fa;
`;
const DropDowncontainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;
const Text3 = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
`;
const SignupButton = styled.div<{ disabled: boolean }>`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: ${(props) => (props.disabled ? "#b2ddff" : "#2E90FA")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  line-height: 44px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const BackButton = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2e90fa;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Label = styled.button`
  width: 101px;
  height: 44px;
  border: 1px solid #b2b2b2;
  border-radius: 8px;
  padding: 10px 14px 10px 14px;
  font-size: 16px;
  font-weight: 400;
  color: #7f7f7f;
  background: url(${dropdownIcon}) no-repeat right 12px center;
  background-size: 20px;
  cursor: pointer;
  text-align: left;
`;
const OptionList = styled.ul`
  display: ${(props: { active: boolean }) => (props.active ? "block" : "none")};
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  height: 494px;
  overflow: auto;
  left: 0;
  list-style: none;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  width: 101px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const OptionItem = styled.li`
  padding: 10px 14px;
  cursor: pointer;
  color: #101828;
  font-size: 16px;
  font-weight: 500;
  :hover {
    background: #f6f6f6 url(${dropdownCheckIcon}) no-repeat right 12px center;
    background-size: 20px;
  }
`;
const BirthdayBox: React.FC<Props> = ({ onNext, onPrev }) => {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);
  const [isSignupValid, setIsSignupValid] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState<boolean>(false);
  const [isMonthOpen, setIsMonthOpen] = useState<boolean>(false);
  const [isYearOpen, setIsYearOpen] = useState<boolean>(false);

  useEffect(() => {
    if (day > 0 && month > 0 && year > 0) {
      setIsSignupValid(true);
    } else {
      setIsSignupValid(false);
    }
  }, [day, month, year]);

  const generateMonths = () => {
    //월생성
    const monthsArray = Array.from({ length: 12 }, (_, i) =>
      (i + 1).toString()
    );
    return monthsArray;
  };
  const generateDays = () => {
    // 일 생성
    const daysArray = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    return daysArray;
  };

  // 년도생성
  const generateYears = () => {
    const yearsArray = Array.from({ length: 2023 - 1919 }, (_, i) =>
      (1919 + i).toString()
    );
    return yearsArray.reverse();
  };

  const handleSignup = () => {
    if (isSignupValid) {
      onNext();
    }
  };
  const toggleOptionsDay = () => {
    setIsDayOpen(!isDayOpen);
  };
  const toggleOptionsMonth = () => {
    setIsMonthOpen(!isMonthOpen);
  };
  const toggleOptionsYear = () => {
    setIsYearOpen(!isYearOpen);
  };
  return (
    <LoginBox1>
      <LogoImg />
      <Title>생일 추가</Title>
      <Text1>공개 프로필에 포함되지 않습니다.</Text1>
      <Text2>왜 생일 정보를 입력해야 하나요?</Text2>
      <DropDowncontainer>
        <div style={{ position: "relative" }}>
          <Label onClick={toggleOptionsMonth}>
            {month > 0 ? month : "Month"}
          </Label>
          <OptionList active={isMonthOpen}>
            {generateMonths().map((monthOption) => (
              <OptionItem
                key={monthOption}
                onClick={() => {
                  setMonth(parseInt(monthOption));
                  setIsMonthOpen(false);
                }}
              >
                {monthOption}
              </OptionItem>
            ))}
          </OptionList>
        </div>

        <div style={{ position: "relative" }}>
          <Label onClick={toggleOptionsDay}>{day > 0 ? day : "Day"}</Label>
          <OptionList active={isDayOpen}>
            {generateDays().map((dayOption) => (
              <OptionItem
                key={dayOption}
                onClick={() => {
                  setDay(parseInt(dayOption));
                  setIsDayOpen(false);
                }}
              >
                {dayOption}
              </OptionItem>
            ))}
          </OptionList>
        </div>

        <div style={{ position: "relative" }}>
          <Label onClick={toggleOptionsYear}>{year > 0 ? year : "Year"}</Label>
          <OptionList active={isYearOpen}>
            {generateYears().map((yearOption) => (
              <OptionItem
                key={yearOption}
                onClick={() => {
                  setYear(parseInt(yearOption));
                  setIsYearOpen(false);
                }}
              >
                {yearOption}
              </OptionItem>
            ))}
          </OptionList>
        </div>
      </DropDowncontainer>
      <Text3>태어난 날짜를 입력해야합니다</Text3>
      <SignupButton onClick={handleSignup} disabled={!isSignupValid}>
        가입
      </SignupButton>
      <BackButton onClick={() => onPrev()}>돌아가기</BackButton>
    </LoginBox1>
  );
};

export default BirthdayBox;
