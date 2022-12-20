import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <ul>
            <li><Link to= "/"> Home </Link></li>
            <li><Link to= "/outside"> Outside </Link></li>
            <li><Link to= "/exploring"> Exploring </Link></li>
            <li><Link to= "/show"> Show </Link></li>
        </ul>
    )
}

export default Navbar

