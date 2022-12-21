import {Link} from 'react-router-dom'

function NavbarButton(props){
    return(
        <div>
            <Link to={props.route} className='h-[70px] w-[70px]'>
                <p className='text-center font-mono font-semibold text-3xl text-white hover:text-stone-400'>{props.text}</p>
            </Link>
        </div>
    )
}

export default NavbarButton