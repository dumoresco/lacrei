import React from "react";
import { Container } from "./styles";

import { useRouter } from "next/router";
import { LinkController } from "../LinkController";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <nav className="container">
        <h1
          onClick={() => {
            router.push("/home");
          }}
        >
          Lacrei
        </h1>
        <ul>
          <li>
            <LinkController href="/home" label="Home" />
          </li>
          <li>
            <LinkController href="/pessoa-usuaria" label="Pessoa Usuária" />
          </li>
          <li>
            <LinkController href="/profissional" label="Profissional" />
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
