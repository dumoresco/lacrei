import React from "react";

import Layout from "..";
import HeroContent from "../../components/hero-content";

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroContent
        title="Boas vindas a Lacrei Saúde"
        description="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        image_source="/images/home.png"
        showActions={true}
      />
    </Layout>
  );
};

export default Home;
