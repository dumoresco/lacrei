import React from "react";

import Layout from "..";
import HeroContent from "../../components/hero-content";

const PessoaUsuaria: React.FC = () => {
  return (
    <Layout>
      <HeroContent
        title="Pessoa Usuária"
        description="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        image_source="/images/pessoa-usuaria.png"
        showBorder
      />
    </Layout>
  );
};

export default PessoaUsuaria;
