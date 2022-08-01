const Button = ({ result, setResult }) => {

    const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")"]
    const operatorArray = ["+", "-", "*", "/"]

    function lastCharacterIsNumber(string) {
        console.log("valid?", numberArray.includes(string.slice(-1)))
        return (numberArray.includes(string.slice(-1)))
    }

    function lastCharacterIsOperator(string) {
        console.log("valid?", operatorArray.includes(string.slice(-1)))
        return (operatorArray.includes(string.slice(-1)))
    }

    function addNumber(number) {
        if (result == "0") {
            //equation.current = number
            setResult(number)
        } else {
            //equation.current = equation.current + number
            setResult(prev => prev + number)
        }
        //console.log("equation", equation.current)
    }

    function clear() {
        //equation.current = ""
        setResult("0")
        //console.log("equation", equation.current)
    }

    function addBracket(bracket) {
        //equation.current = equation.current + "("
        if (result == "0") {
            //equation.current = number
            setResult(bracket)
        } else {
            //equation.current = equation.current + number
            setResult(prev => prev + bracket)
        }
        //console.log("equation", equation.current)
    }

    function add() {
        if (lastCharacterIsNumber(result)) {
            //equation.current = equation.current + "+"
            setResult(prev => prev + "+")
        } else if (lastCharacterIsOperator(result)) {
            //equation.current = equation.current.slice(0, -1) + "+"
            setResult(prev => prev.slice(0, -1) + "+")
        }
        //console.log("equation", equation.current)
    }

    function minus() {
        if (lastCharacterIsNumber(result)) {
            //equation.current = equation.current+ "-"
            setResult(prev => prev + "-")
        } else if (lastCharacterIsOperator(result)) {
            //equation.current = equation.current.slice(0, -1) + "-"
            setResult(prev => prev.slice(0, -1) + "-")
        }
        //console.log("equation", equation.current)
    }

    function multiply() {
        if (lastCharacterIsNumber(result)) {
            //equation.current = equation.current + "*"
            setResult(prev => prev + "*")
        } else if (lastCharacterIsOperator(result)) {
            //equation.current = equation.current.slice(0, -1) + "*"
            setResult(prev => prev.slice(0, -1) + "*")
        }
        //console.log("equation", equation.current)
    }

    function divide() {
        if (lastCharacterIsNumber(result)) {
            //equation.current = equation.current + "/"
            setResult(prev => prev + "/")
        } else if (lastCharacterIsOperator(result)) {
            //equation.current = equation.current.slice(0, -1) + "/"
            setResult(prev => prev.slice(0, -1) + "/")
        }
        //console.log("equation", equation.current)
    }

    function equalTo() {
        if (lastCharacterIsNumber(result)) {
            //const answer = eval(result).toString()
            setResult(eval(result).toString())
            //equation.current = answer
        }
        //console.log("equation", equation.current)
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