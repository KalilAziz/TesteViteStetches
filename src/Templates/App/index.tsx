import { useState } from "react";
import { Heading } from "../../Components/Heading";
import { globalStyles } from "../../styles/globalStyled";

export const App = () => {
  const [dark, setDark] = useState(false);
  globalStyles();
  return (
    <>
      <button onClick={() => setDark((d) => !d)}>
        Theme {dark ? "dark" : "Light"}
      </button>

      <Heading
        as="h3"
        variant="purple"
        fontSize="5"
        sizeSpacing="8"
        outlined
        dark={dark}
      >
        Teste de botão purple size 1
      </Heading>


      <Heading 
        as='h5' 
        outlined 
        sizeSpacing="6" 
        fontSize="8" 
        dark={dark}>
        Teste de botão default size 2
      </Heading>
    </>
  );
};
