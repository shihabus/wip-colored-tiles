import React from "react";
import "./styles.css";
import MemberCard from "../elements/MemberCard";
import { MemberList } from "./styles";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const RandColored = props => {
  const saltedChildren = React.Children.map(props.children, (child, idx) => {
    const bgColor = getRandomColor();
    return React.cloneElement(child, {
      bgColor: "#fff"
    });
  });

  return <MemberList>{saltedChildren}</MemberList>;
};

export default function App() {
  return (
    <RandColored>
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </RandColored>
  );
}
