import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

const IconStyle = { color: "#fff", fontSize: "30px" };
const social = [
  {
    link: "/",
    icon: <TwitterOutlined style={IconStyle} />,
  },
  {
    link: "/",
    icon: <LinkedinOutlined style={IconStyle} />,
  },
  {
    link: "/",
    icon: <FacebookOutlined style={IconStyle} />,
  },
];
const StyledLink = styled.a`
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
`;
export const Social = () => (
  <>
    {social.map(({ link, icon }) => (
      <StyledLink href={link}>{icon}</StyledLink>
    ))}
  </>
);
