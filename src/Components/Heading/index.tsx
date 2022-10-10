import * as Styled from "./styles";
import { ReactNode, useState } from "react";
import { darkTheme } from "./styles";
interface Props {
  children: ReactNode;
  sizeSpacing?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  fontSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  variant?: "purple" | "gray";
  outlined?: boolean;
  dark?: boolean;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/*
const teste = css({
  backgroundColor: "blue",
});
*/

export const Heading = ({
  children,
  sizeSpacing = "1",
  fontSize = "1",
  variant,
  dark,
  as,
}: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <Styled.Container
      as={as}
      onClick={() => setVisible((s) => !s)}
      fontSize={fontSize}
      size={sizeSpacing}
      variant={variant}
      outlined={visible}
      className={dark ? darkTheme : ""}
    >
      {children}
    </Styled.Container>
  );
};
