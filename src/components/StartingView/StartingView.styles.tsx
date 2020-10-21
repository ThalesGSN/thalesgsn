import styled, {css} from 'styled-components';
import {isDesktop} from "../../utils/consts";


export const StartingViewContainer = styled.section`
  display: grid;
  grid-auto-rows: 10vh 40vh 25vh 10vh 15vh;
  justify-items: center;
  grid-template-areas: '.'
                      'Profile'
                      'TypeLanguage'
                      '.'
                      'Scroll';
`;

export interface GradientBackgroundProps {
 darkMode: boolean;
}
export const GradientBackground = styled.div<GradientBackgroundProps>`
  position: absolute;
  background: rgb(14,0,255);
  background: linear-gradient(318deg, rgba(14,0,255,1) 0%, rgba(69,69,255,1) 35%, rgba(0,212,255,1) 100%);
  width: 100vw;
  height: 90vh;
  transform: rotate(45deg);
  border-radius: 50px;
  overflow-x: hidden;
  z-index: -1;
  
  ${(props: GradientBackgroundProps) => props.darkMode && css`
    background: rgb(131,58,180);
    background: linear-gradient(318deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  `}
  
  ${isDesktop} {
    height: 60vh;    
  }
`;
