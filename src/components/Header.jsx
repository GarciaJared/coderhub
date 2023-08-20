import React from "react";
import { StyledHeader, StyledNav, Logo, Image } from "../styles/header.styled";
import { Container } from "../styles/container.styled";
import { Flex } from "../styles/flexed.styled";
import { Button } from "../styles/button.styled";
import { HiOutlinePhone } from "react-icons/hi";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <Logo src="src/assets/images/coderhub.png" alt="CoderHub logo" />{" "}
          <Button>
            <HiOutlinePhone size={22} />
          </Button>
        </StyledNav>
        <Flex>
          <div>
            <h1>Join the biggest coder hub in Mexico</h1>
            <p>CoderHub is a community to Latinoamerican beginners. </p>
            <p>
              Become a great programmer and start developing your own apps. 👨🏽‍💻
            </p>

            <Button bg="#FACC41" color="N/A">
              Get started
            </Button>
          </div>

          <Image src="src/assets/images/illustration-mockups.svg" alt="Banner" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
