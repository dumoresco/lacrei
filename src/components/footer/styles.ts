import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;

  .container {
    padding: 2rem 0;
    border-top: 1px solid #b0e0d3;
  }

  .links {
    a {
      color: ${(props) => props.theme.colors.gray};
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      margin-right: 1rem;
      &.link_active {
        color: ${(props) => props.theme.colors.dark_gray};
        font-weight: 600;
      }
      &:hover {
        opacity: 0.6;
      }
    }
  }
  .social_media_links {
    margin: 2rem 0;

    a + a {
      margin-left: 1rem;
    }
    a:hover {
      opacity: 0.6;
    }
    a img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
