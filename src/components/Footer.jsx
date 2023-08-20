import { Container } from "../styles/container.styled";
import { Flex } from "../styles/flexed.styled";
import { StyledFooter } from "../styles/footer.styled";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="src/assets/images/coderhub.png" alt="coderhub" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              vel perspiciatis delectus veniam voluptate asperiores.
            </li>
            <li>+52 6142862781</li>
            <li>contact@coderhub.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li> What we do </li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li> Blog</li>
            <li>Contact us</li>
          </ul>
          {/* SOCIAL MEDIA */}
          <SocialIcons/>
          <p>&copy; 2023 Huddle. All right reserved</p>
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
