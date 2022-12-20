import { Link } from "react-router-dom";

function Home() {
  return (
    <body className="bg-[#302B2B] flex h-full w-full min-h-screen justify-center items-center">
      <div>
        <div>
          <h1 className="m-10 text-6xl font-mono font-bold text-white drop-shadow-[0_5px_0px_rgba(14,1,19,0.4)]">
            Escolha seu personagem
          </h1>
        </div>

        <div className="grid grid-cols-12">
          <Link
            to="/outside"
            className="p-8 rounded-[30px] bg-[#630000] col-span-8 col-start-3 border-2 mb-5"
          >
            <p className="text-center font-mono font-semibold text-4xl text-white drop-shadow-[0_4px_0px_rgba(14,1,19,0.4)]">
                Rue
            </p>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Home;
