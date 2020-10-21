import styled from 'styled-components';

export interface ProfilePicContainerProps {
    image: string;
}
export const ProfilePicContainer = styled.div<ProfilePicContainerProps>`
  padding: 0;
  display: flex;
  border: 3px solid var(--main-color);
  border-radius: 50%;
  
  article {
    background-position: center;
    background-size: cover;
    background-image: url('${(props: ProfilePicContainerProps) => props.image}');
    border-radius: 50%;
    width: 50vw;
    height: 50vw;
  }
`;