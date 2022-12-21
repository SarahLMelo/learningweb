import NavbarButton from "./NavbarButton"

function Navbar(props){
    return(
        <div className="bg-[#630000] w-full h-[70px] flex justify-center">
            <div className="flex justify-around gap-x-2 w-3/4 items-center">
                <NavbarButton text="Outside" route="/outside"></NavbarButton>
                <NavbarButton text="Exploring" route="/exploring"></NavbarButton>
                <NavbarButton text="Show" route="/show"></NavbarButton>
            </div>
        </div>
    )
}

export default Navbar