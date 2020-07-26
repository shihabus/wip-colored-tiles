import styled from "styled-components";

const width = window.innerWidth;
const columnCount = Math.floor(width / 220);
export const MemberList = styled.div`
  display: grid;
  justify-items: center;
  margin: auto 0;
  grid-template-columns: repeat(${columnCount}, 1fr);
`;
