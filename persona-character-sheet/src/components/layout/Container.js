function Container(props){
    return(
        <div className="bg-[#302B2B] flex flex-col h-full w-full min-h-screen justify-center items-center">
            {props.children}
        </div>
    )
}

export default Container;