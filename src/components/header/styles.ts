import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;

  background-color: ${(props) => props.theme.colors.light_gray};
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
    }
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    h1 {
      cursor: pointer;
      font-size: 2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.primary};
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        transition: all 0.2s ease-in-out;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
