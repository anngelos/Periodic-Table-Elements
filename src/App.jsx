import React, { useState } from "react";
import Card from "./components/Card/Card";
import { StylesProvider } from "@material-ui/core/styles";
import Modal from "./components/Modal/Modal";
import elementList from "./data/elements.js";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Oswald',
    ].join(','),
  }
});

function App() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dataelement, setDataElement] = useState({});

  function searchElement() {
    let foundedData;

    if (search) {
      for (let i = 0; i < elementList.length; i++) {
        const element = elementList[i];
        if (search.toUpperCase() === element.name.toUpperCase()) {
          foundedData = element;
        }
      }
      if (foundedData) {
        setDataElement(foundedData);
        setOpen(true);
      } else {
        alert(
          "Dado não encontrado, por favor verifique o nome do elemento digitado."
        );
      }
    } else {
      alert("Digite o nome de um elemento que seja válido antes de Procurar,");
    }
  }

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div>
          <Card
            searchElement={searchElement}
            search={search}
            setSearch={setSearch}
            open={open}
            setOpen={setOpen}
            title="VERIFICADOR DE ELEMENTOS PERIÓDICOS"
          />
          <Modal dataelement={dataelement} open={open} setOpen={setOpen} />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;