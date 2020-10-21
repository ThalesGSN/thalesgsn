import styled from 'styled-components';


export const TypeLanguageContainer = styled.code`
  grid-area: TypeLanguage;
  place-self: center;
  margin-bottom: 5vh;
  font-size: clamp(14px, 5vw, 72px);
  
  color: var(--terminal-green);
  .Typewriter {
    font-weight: bold;
    display: inline;
    .Typewriter__cursor {
      font-family: Oswald, sans-serif;
      letter-spacing: 0;
    }
  }
`;