import React from 'react'

function CentralBody(props){
    return(
        <div className="flex flex-col grow bg-[#D9D9D9] opacity-80 w-3/4 h-auto m-3">
            <h1 className="text-center mt-5 font-mono font-semibold text-5xl">
                {props.name}
            </h1>

            {props.children}
        </div>
    )
}

export default CentralBody