import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  padding: 2rem 0rem;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
      max-width: 50%;
      h1 {
        font-weight: bold;
        font-size: 4rem;
      }
      p {
        font-size: 1.5rem;
        margin: 2rem 0;
        color: ${(props) => props.theme.colors.gray};

        &.description-border {
          padding-left: 1rem;
          border-left: 4px solid ${(props) => props.theme.colors.primary};
        }
      }

      .actions button {
        padding: 0.5rem 2rem;
        font-weight: bold;
        font-size: 1.2rem;
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
        border: 2px solid transparent;

        & + button {
          margin-left: 1rem;
        }

        &:hover {
          opacity: 0.6;
        }
      }
      .actions .primary {
        background-color: ${(props) => props.theme.colors.primary};
        color: #fff;
      }
      .actions .outline {
        background-color: #fff;
        color: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.primary};
      }
    }

    .content-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 860px) {
    height: 100%;

    .container {
      flex-direction: column;
      .content {
        max-width: 100%;
        h1 {
          font-size: 2rem;
          text-align: center;
        }
        p {
          text-align: center;
          font-size: 1.4rem;
        }
        .actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          button {
            & + button {
              margin-left: 0rem;
            }
            width: 100%;
            margin: 0.5rem 0;
          }
        }
      }
    }
  }
`;
