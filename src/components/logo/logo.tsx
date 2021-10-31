import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoIcon from "../../images/svg/logo.svg";

const LogoContainer = styled.h1`
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  width: 190px;
`;

const Logo: React.FC = () => (
    <LogoContainer>
      <StyledLink to="/">
        <LogoIcon />
      </StyledLink>
    </LogoContainer>
  );

export { Logo };
