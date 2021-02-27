import React from "react";

import { Logo, Text } from "../../components/index";

import { Container, FadeIn } from "./style";

const jsonText = require("../../mocks/text.json");

export default function Board() {
  return (
    <Container>
      <FadeIn>
        <Logo />
        <Text text={jsonText.text} />
      </FadeIn>
    </Container>
  );
}
