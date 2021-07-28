import { useLoginContext } from "../LoginProvider";

const Nav = () => {
    const user = useLoginContext(useLoginContext);
    let resultado = null
    if(user){
        resultado = (
        <div className="nav">
            <p>Nombre:{user.nombre}</p>
            <p>Email:{user.email}</p>
        </div>
        )
    }
    return resultado;
}

export default Nav;
