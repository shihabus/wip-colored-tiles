import React from "react";
import {
  Card,
  Image,
  NameText,
  SecondaryText,
  HoveredLayer,
  MediaIconRow,
  MediaIcon
} from "./styles";
import useHover from "../../hooks/useHover";

const CardWrapper = props => {
  const [hoverRef, isHovered] = useHover();

  const saltedChildren = React.Children.map(props.children, child => {
    return React.cloneElement(child, { isHovered: isHovered });
  });

  return (
    <Card ref={hoverRef} isHovered={isHovered} {...props}>
      {saltedChildren}
    </Card>
  );
};

const HoverLayer = props => {
  return (
    <HoveredLayer {...props}>
      <MediaIconRow>
        <MediaIcon />
        <MediaIcon />
        <MediaIcon />
        <MediaIcon />
        <MediaIcon />
      </MediaIconRow>
    </HoveredLayer>
  );
};
function MemberCard({ bgColor }) {
  return (
    <CardWrapper bgColor={bgColor}>
      <Image />
      <NameText>Shihabuddhen Bin Subari</NameText>
      <SecondaryText>Designation</SecondaryText>
      <SecondaryText>Company</SecondaryText>
      <HoverLayer />
    </CardWrapper>
  );
}

export default MemberCard;
