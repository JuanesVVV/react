import { useState } from 'react';
import Button from './Button';

const Contador = () => {
    const [contador, setContador] = useState('');
    const ImputNumber = (num) => setContador((prev) + num.toString());

    function Aumentar() {
        setContador(contador + 1);
    }

    return(
        <div>
            <label>Contador: {contador}</label>
            <br />
            <button onClick={Aumentar}>Aumentar</button>
            <br />
            <Button onClick = {() => ImputNumber(1)}>1</Button>
            <Button onClick = {() => ImputNumber(2)}>2</Button>
            <Button onClick = {() => ImputNumber(3)}>3</Button>
            <br />
            <Button onClick = {() => ImputNumber(4)}>4</Button>
            <Button onClick = {() => ImputNumber(5)}>5</Button>
            <Button onClick = {() => ImputNumber(6)}>6</Button>
            <br />
            <Button onClick = {() => ImputNumber(7)}>7</Button>
            <Button onClick = {() => ImputNumber(8)}>8</Button>
            <Button onClick = {() => ImputNumber(9)}>9</Button>
        </div>
    );
};




export default Contador;