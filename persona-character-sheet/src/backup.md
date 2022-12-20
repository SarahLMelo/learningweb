body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #302B2B;
}

.box {
  position: relative;
  min-height: 500px;
  height: fit-content;

  max-width: 1060px;

  background-color: #E5E5E5;
  opacity: 80%;
}

.center{
  margin: 0 auto;
  align-self: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


//HOME.js
import { Link } from 'react-router-dom'
import'./Home.css'
function Home(){
    return (
        <div className="menu center">
            <h1>Escolha seu personagem</h1>

            <div className='selectionBox center'>
                <Link to= "/outside" className='kinho'> Rue </Link>
            </div>
        </div>
    )
}

export default Home

//HOME.css
.menu{
    margin-top: 100px;
    margin-bottom: 100px;

    width: 1060px;
    min-height: 300px;
    height: auto;


    /* background-color: aliceblue; */
}

.selectionBox{
    width: 500px;
    height: 100px;
    
    border: 3px solid whitesmoke;
    border-radius: 200px;

    background-color: #630000;
}

.kinho{

    font-size: large;
}

Link{

}

h1 {
    position: relative;
    padding-top: 50px;

    text-align:center;
    color: whitesmoke;
    font-family:'Courier New', Courier, monospace;
    font-size: 50px;
    text-shadow: 2px 2px gray;
    
}