import React,{useState} from 'react';
import { Container, Screen, Previous, Current, Button } from '../Styles/Main';

const Calculator = () => {
    const [current, setCurrent ] = useState("");
    const [previous, setPrevious ] = useState('');
    const [operation, setOperation] = useState('');
  

    const appendValueHandler = (els) => {
        const value = els.target.getAttribute("data");
         if(value === '.' && current.includes('.')) return;
        
        setCurrent(current + value);
    };
     
    const deleteHandler = () => {
        setCurrent(String(current).slice(0, -1));
    };

    const allclearHandler = () => {
        setCurrent("");
        setPrevious("");
        setOperation("");
    };

    const chooseOperationHandler = (els) => {
        if(current === "") return;
        if(previous !== ""){
            let value = compute();
            setPrevious(value);
        }else{
            setPrevious(current);
        }
        setCurrent("");
        setOperation(els.target.getAttribute('data'));
    };

    const equalHandler = () => {
        let value = compute();
        if(value === undefined || value == null ) return;
        setCurrent(value);
        setPrevious("");
        setOperation("");

    };

    const compute = () => {
        let result;
        let previousNumber = parseFloat(previous);
        let currentNumber = parseFloat(current);
        if(isNaN(previousNumber) || isNaN(currentNumber)) return
        switch(operation){
         
            case "÷":
                result = previousNumber / currentNumber;
                break;
            case "x":
                result = previousNumber * currentNumber;
                break;
            case "+":
                result = previousNumber + currentNumber;
                break;
            case "-":
                result = previousNumber - currentNumber;
                break;
            default:return

        }
        return result;

    };
  return (

    <>
    
    <Container>
        <Screen>
        <Previous>{previous} {operation} </Previous>
        <Current>{current}</Current>   
        </Screen>
        <Button gridSpan={2} control onClick={allclearHandler}>AC</Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button data={'÷'} onClick={chooseOperationHandler} operation>÷</Button>
        <Button data={7} onClick={appendValueHandler}>7</Button>
        <Button data={8} onClick={appendValueHandler}>8</Button>
        <Button data={9} onClick={appendValueHandler}>9</Button>
        <Button data={'x'} onClick={chooseOperationHandler} operation>x</Button>
        <Button data={4} onClick={appendValueHandler}>4</Button>
        <Button data={5} onClick={appendValueHandler}>5</Button>
        <Button data={6} onClick={appendValueHandler}>6</Button>
        <Button data={'+'} onClick={chooseOperationHandler} operation>+</Button>
        <Button data={1} onClick={appendValueHandler}>1</Button>
        <Button data={2} onClick={appendValueHandler}>2</Button>
        <Button data={3} onClick={appendValueHandler}>3</Button>
        <Button data={'-'} onClick={chooseOperationHandler} operation>-</Button>
        <Button data={'.'} onClick={appendValueHandler} decimal>.</Button>
        <Button data={0} onClick={appendValueHandler}>0</Button>
        <Button gridSpan={2} equals onClick={equalHandler}>=</Button>

    </Container>
      
    </>
  );
};

export default Calculator;
