import React, { useState } from "react";
import { Container } from "./styles";
import Link from "next/link";
import path from "path";
import { useRouter } from "next/router";
import { LinkController } from "../LinkController";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="container">
        <div className="links">
          <LinkController href="/home" label="Home" />
          <LinkController href="/pessoa-usuaria" label="Pessoa Usuária" />
          <LinkController href="/profissional" label="Profissional" />
        </div>
        <div className="social_media_links">
          <a href="https://www.instagram.com/lacrei.saude" target="_blank">
            <img src="/images/InstagramLogo.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/lacrei.saude" target="_blank">
            <img src="/images/FacebookLogo.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/lacrei" target="_blank">
            <img src="/images/LinkedinLogo.png" alt="Linkedin" />
          </a>
        </div>
        <span>Desafio Front-end Lacrei</span>
      </div>
    </Container>
  );
};

export default Footer;
