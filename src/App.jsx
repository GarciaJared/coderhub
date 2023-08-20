/* Styled-components - 3rd library*/
import { Container } from "./styles/container.styled";
import { GlobalStyles } from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
/* COMPONENTS */
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
/* DATA */
import content from "./content";

function App() {
  const theme = {
    colors: {
      header: "#8E5CA6",
      body: "#fff",
      footer: "#7F86C1",
      orange: "#F04C41",
      yellow: " #FACC41",
      white: "#fff"
    },
    mobile: "768px",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
{/* SOURCE CODE PRACTICE: https://www.youtube.com/watch?v=02zO0hZmwnw&ab_channel=TraversyMedia */}
export default App;
