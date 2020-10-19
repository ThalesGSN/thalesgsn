import styled from "styled-components";

export const ScrollIndicationContainer = styled.article`
  grid-area: Scroll;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
export const ScrollIcon = styled.main`
  border: 3px solid  var(--main-color);
  width: 25px;
  height: 48px;
  border-radius: 100px;
  background-size: 100% 200%;
  animation: nudgeMouse 6s ease-out infinite;

    &:before, &:after {
      content: "";
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      margin: auto;
    }
    &:before {
      width: 19px;
      height: 42px;
      background-color: transparent;
      border-radius: 100px;
    }
    &:after {
      background-color: var(--main-color);
      width: 8px;
      height: 8px;
      border-radius: 100%;
      animation: trackBallSlide 6s linear infinite;
    }
`;