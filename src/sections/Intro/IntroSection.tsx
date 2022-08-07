import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { SideNav, Social } from "../../components";
import Logo from "./logo.png";
import "./index.css";

const StyledContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;
const StyledTitle = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 7px;
    font-size: 74px;
    color: #fff;
    text-align: center;
  }
`;

const StyledDescription = styled(Typography.Text)`
  display: block;
  margin-bottom: 60px;
  font-size: 28px;
  color: #fff;
`;

const StyledButton = styled(Button)`
  min-width: 236px;
  height: auto;
  padding: 15px;
  border-radius: 25px;
  font-size: 20px;
  line-height: 1;
`;
export const IntroSections = () => {
  return (
    <div className="intro-section">
      <SideNav />
      <Row justify="space-between">
        <Row>
          <Col>
            <SideNav />
          </Col>
          <Col>
            <a href="https://test">
              <img src={Logo} alt="" />
            </a>
          </Col>
        </Row>
        <Col>
          <Social />
        </Col>
      </Row>
      <StyledContainer>
        <StyledTitle>The best products start with Figma</StyledTitle>
        <StyledDescription>
          Most calendars are designed for teams. Slate is designed for
          freelancers.
        </StyledDescription>
        <StyledButton type="primary">Try for free</StyledButton>
      </StyledContainer>
    </div>
  );
};
