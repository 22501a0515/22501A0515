import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/compress">Compress</Link></li>
                <li><Link to="/show-compress">Links</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
