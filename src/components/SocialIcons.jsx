import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { StyledSocialMedia } from "../styles/social.styled";
const SocialIcons = () => {
  return (
    <StyledSocialMedia>
      <li>
        <a href="https://x.com">
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <BsGithub />
        </a>
      </li>
      <li>
        <a href="https://x.com">
          <BsLinkedin />
        </a>
      </li>
    </StyledSocialMedia>
  );
};

export default SocialIcons;
