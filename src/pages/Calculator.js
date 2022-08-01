import Display from '../components/js/Display';
import Button from '../components/js/Button';
import { useState } from 'react';

const Calculator = () => {

    const [result, setResult] = useState("0")

    return (
        <div className="container-fluid calculator justify-content-center">
            <br />
            <div className="row">
                <div className="col-sm-6 col-xl-4">
                    <Display result={result}/>
                    <Button result={result} setResult={setResult}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator