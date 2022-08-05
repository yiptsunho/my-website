const Button = ({ result, setResult }) => {

    const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")"]
    const operatorArray = ["+", "-", "*", "/"]

    function lastCharacterIsNumber(string) {
        return (numberArray.includes(string.slice(-1)))
    }

    function lastCharacterIsOperator(string) {
        return (operatorArray.includes(string.slice(-1)))
    }

    function addNumber(number) {
        if (result === "0") {
            setResult(number)
        } else {
            setResult(prev => prev + number)
        }
    }

    function clear() {
        setResult("0")
    }

    function addBracket(bracket) {
        if (result === "0") {
            setResult(bracket)
        } else {
            setResult(prev => prev + bracket)
        }
    }

    function add() {
        if (lastCharacterIsNumber(result)) {
            setResult(prev => prev + "+")
        } else if (lastCharacterIsOperator(result)) {
            setResult(prev => prev.slice(0, -1) + "+")
        }
    }

    function minus() {
        if (lastCharacterIsNumber(result)) {
            setResult(prev => prev + "-")
        } else if (lastCharacterIsOperator(result)) {
            setResult(prev => prev.slice(0, -1) + "-")
        }
    }

    function multiply() {
        if (lastCharacterIsNumber(result)) {
            setResult(prev => prev + "*")
        } else if (lastCharacterIsOperator(result)) {
            setResult(prev => prev.slice(0, -1) + "*")
        }
    }

    function divide() {
        if (lastCharacterIsNumber(result)) {
            setResult(prev => prev + "/")
        } else if (lastCharacterIsOperator(result)) {
            setResult(prev => prev.slice(0, -1) + "/")
        }
    }

    function equalTo() {
        if (lastCharacterIsNumber(result)) {
            setResult(eval(result).toString())
        }
    }

    return (
    <>
        <div className="btn-group-vertical" style={{width: "75%"}}>
            <div className="btn-group">
                <button onClick={clear} type="button" className="btn btn-light btn-lg">c</button>
                <button onClick={() => addBracket("(")} type="button" className="btn btn-light btn-lg">(</button>
                <button onClick={() => addBracket(")")} type="button" className="btn btn-light btn-lg">)</button>
            </div>
            <div className="btn-group">
                <button onClick={() => addNumber("7")} type="button" className="btn btn-light btn-lg">7</button>
                <button onClick={() => addNumber("8")} type="button" className="btn btn-light btn-lg">8</button>
                <button onClick={() => addNumber("9")} type="button" className="btn btn-light btn-lg">9</button>
            </div>
            <div className="btn-group">
                <button onClick={() => addNumber("4")} type="button" className="btn btn-light btn-lg">4</button>
                <button onClick={() => addNumber("5")} type="button" className="btn btn-light btn-lg">5</button>
                <button onClick={() => addNumber("6")} type="button" className="btn btn-light btn-lg">6</button>
            </div>
            <div className="btn-group">
                <button onClick={() => addNumber("1")} type="button" className="btn btn-light btn-lg">1</button>
                <button onClick={() => addNumber("2")} type="button" className="btn btn-light btn-lg">2</button>
                <button onClick={() => addNumber("3")} type="button" className="btn btn-light btn-lg">3</button>
            </div>
            <div className="btn-group">
                <button onClick={() => addNumber("0")} type="button" className="btn btn-light btn-lg">0</button>
                <button onClick={() => addNumber(".")} type="button" className="btn btn-light btn-lg">.</button>       
            </div>
        </div>
        <div className="btn-group-vertical" style={{width: "25%"}}>
            <button onClick={add} type="button" className="btn btn-danger btn-lg">+</button>
            <button onClick={minus} type="button" className="btn btn-danger btn-lg">-</button>
            <button onClick={multiply} type="button" className="btn btn-danger btn-lg">x</button>
            <button onClick={divide} type="button" className="btn btn-danger btn-lg">÷</button>
            <button onClick={equalTo} type="button" className="btn btn-danger btn-lg">=</button>
        </div>
    </>
    )
}

export default Button