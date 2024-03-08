import { createGlobalStyle } from "styled-components";

export const supportDeviceSize = 1080;

export const GlobalStyle = createGlobalStyle`
html {
font-size: 62.5%; // 1rem = 10px 로 변경 한 것
// 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
// 128px => 12.8rem , 4px => 0.4rem 가능!

    @media all and (max-width: ${supportDeviceSize}px) {
        font-size: 31.25%;
    }
}

body {
    background: white;
    margin: 0;
    padding: 0;
    font-family: -apple-system, sans-serif, Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;
