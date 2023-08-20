import { styled } from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.white};
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul > li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }
  img {
    width: 10%;
    align-items: left;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

export { StyledFooter };
