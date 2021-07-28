import React,{useState} from 'react';
import { useLoginChangeContext } from '../LoginProvider';

const Formulario = () => {

    const changeUser = useLoginChangeContext();
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState(); 

    const handleSubmit = (e) =>{
        e.preventDefault();
        changeUser({nombre,email});
    }

    return (
        <div>
             <form className="contentForm" onSubmit={handleSubmit}>
                <div className="contentForm__group">
                    <input type="text"
                        placeholder="Nombre"
                        className="form-control"
                        name="nombre"
                        id="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input type="text"
                        placeholder="Email"
                        className="form-control"
                        name="email" 
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="contentForm__btn">Enviar</button>
                </div>     
             </form>
        </div>
    );
}

export default Formulario;
