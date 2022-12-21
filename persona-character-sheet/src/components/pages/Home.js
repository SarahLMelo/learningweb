import Button from "../home/CharacterButton";
import Container from "../layout/Container";
import Footer from "../layout/Footer";

function Home() {
  return (
    <Container>
      <div className="flex flex-col grow justify-center">
        <div>
          <h1 className="m-10 text-6xl font-mono font-bold text-white drop-shadow-[0_5px_0px_rgba(14,1,19,0.4)]">
            Escolha seu personagem
          </h1>
        </div>

        <Button name="Rue"></Button>
        
      </div>

      <Footer></Footer>
      </Container>
  );
}

export default Home;
