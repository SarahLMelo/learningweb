import { Link } from "react-router-dom"

function CharacterButton(props){
    return(
        <div className="grid grid-cols-12">
          <Link
            to="/outside"
            className="p-8 rounded-[30px] bg-[#630000] col-span-8 col-start-3 border-2 mb-5"
          >
            <p className="text-center font-mono font-semibold text-4xl text-white drop-shadow-[0_4px_0px_rgba(14,1,19,0.4)]">
                {props.name}
            </p>
          </Link>
        </div>
    )
}

export default CharacterButton