import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  min-height: 50px;
  max-width: 100%;
  margin: 10px;
  padding: 15px;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const CardContent = styled.div`
  flex-grow: 1;
  padding: 0px 10px;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const TwitterHandle = styled.span`
  font-size: 15px;
  color: rgb(101, 119, 134);
`;

const Tweet = styled.p`
  margin: 0;
  color: rgb(20, 23, 26);
`;

export default ({ tweet }) => {
  const { text, user: { name, screen_name, profile_image_url } } = tweet
  return (
    <CardContainer>
      <div>
        <UserImage src={profile_image_url} />
      </div>
      <CardContent>
        <UserName>{name}</UserName>
        <TwitterHandle>{` @${screen_name}`}</TwitterHandle>
        <Tweet>{text}</Tweet>
      </CardContent>
    </CardContainer>
  )
};
