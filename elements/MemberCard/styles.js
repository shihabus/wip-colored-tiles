import styled, { css } from "styled-components";

export const Card = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  width: 210px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease-in;
  cursor: pointer;
  ${({ isHovered }) =>
    isHovered &&
    css`
      /* background-color: #d90467; */
    `}
`;

export const Image = styled.img`
  background-color: #e1e1e1;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  transition: all 1s ease-in-out;
  ${({ isHovered }) =>
    isHovered &&
    css`
      transform: scale(1.1);
    `}
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
`;
export const PrimaryText = styled(Text)`
  font-size: 24px;
`;

export const NameText = styled(PrimaryText)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  width: 95%;
`;

export const SecondaryText = styled(Text)`
  font-size: 18px;
`;

export const HoveredLayer = styled.div`
  position: absolute;
  color: white;
  bottom: 0;
  /* left: 0; */
  /* height: 100%; */
  /* width: 100%; */
  transition: all 0.4s;
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

export const CaptionText = styled(Text)`
  font-size: 16px;
`;
export const MediaIconRow = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-left: 5px;
  }
  &:last-child {
    margin-left: 0px;
  }
`;
export const MediaIcon = styled.div`
  background-color: red;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  margin-top: 5px;
`;
