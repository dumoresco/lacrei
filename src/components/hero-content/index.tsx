import React, { useState } from "react";
import { Container } from "./styles";
import Link from "next/link";
import path from "path";
import { useRouter } from "next/router";

type HeroContentProps = {
  title: string;
  description: string;
  image_source: string;
  showBorder?: boolean;
  showActions?: boolean;
};

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  description,
  image_source,
  showBorder = false,
  showActions = false,
}) => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <h1>{title}</h1>
          <p className={showBorder ? " description-border" : ""}>
            {description}
          </p>
          {showActions && (
            <div className="actions">
              <button className="primary">
                <Link href="/pessoa-usuaria" passHref>
                  Pessoa Usuária
                </Link>
              </button>
              <button className="outline">
                <Link href="/pessoa-usuaria" passHref>
                  Profissional
                </Link>
              </button>
            </div>
          )}
        </div>
        <div className="content-image">
          <img src={image_source} alt={title} />
        </div>
      </div>
    </Container>
  );
};

export default HeroContent;
