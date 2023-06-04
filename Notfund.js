import { Link } from "react-router-dom";

const Notfund = () => {
    return ( 
        <div className="not-fund">
            <h2>Oprostite</h2>
            <p>Oprostite ali ta adresa ne postoji</p>
            <Link to='/'>
                Vratite se na pocetnu stranicu.
            </Link>
        </div>
     );
}
 
export default Notfund