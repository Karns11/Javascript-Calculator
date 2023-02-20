function App() {

    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const [expression, setExpression] = React.useState("")
    const [answer, setAnswer] = React.useState(0)

    const display = (symbol) => {
        setExpression(prev => prev + symbol)
        if (expression[expression.length - 1] == '=') {
            if (/[1-9.]/.test(symbol)) {
                setExpression(symbol);
            } else {
                setExpression(answer + symbol)
            }
        } else if (expression.length == 1 && expression[expression.length - 1] == '0') {
            if (symbol == '0') {
                setExpression('0');
            } else if (nums.includes(symbol)) {
                setExpression(prev => prev.slice(1));
            }
        }
    } 

    const calculate = () => {
        setAnswer(eval(expression))
        setExpression(prev => prev + "=")
    }

    const allClear = () => {
        setAnswer(0)
        setExpression("")
    }

    const clear = () => {
        setExpression(prev => prev.split("").slice(0, prev.length-1).join(""));
    }

    return (
        <div className='container'>
            <div className='grid'>
                <div className='dis'>
                    <div className='exp'>{expression}</div>
                    <div className='total'>{answer}</div>
                </div>
                <div onClick={allClear} className='padButton AC light-gray'>AC</div>
                <div onClick={clear} className='padButton C light-gray'>C</div>
                <div onClick={() => display('/')} className='padButton div orange'>/</div>
                <div onClick={() => display('*')} className='padButton times orange'>X</div>
                <div onClick={() => display('7')} className='padButton seven dark-gray'>7</div>
                <div onClick={() => display('8')} className='padButton eight dark-gray'>8</div>
                <div onClick={() => display('9')} className='padButton nine dark-gray'>9</div>
                <div onClick={() => display('-')} className='padButton minus orange'>-</div>
                <div onClick={() => display('4')} className='padButton four dark-gray'>4</div>
                <div onClick={() => display('5')} className='padButton five dark-gray'>5</div>
                <div onClick={() => display('6')} className='padButton six dark-gray'>6</div>
                <div onClick={() => display('+')} className='padButton plus orange'>+</div>
                <div onClick={() => display('1')} className='padButton one dark-gray'>1</div>
                <div onClick={() => display('2')} className='padButton two dark-gray'>2</div>
                <div onClick={() => display('3')} className='padButton three dark-gray'>3</div>
                <div onClick={calculate} className='padButton equal orange'>=</div>
                <div onClick={() => display('0')} className='padButton zero dark-gray'>0</div>
                <div onClick={() => display('.')} className='padButton dot dark-gray'>.</div>
            </div>

            <div className='footer'>
                <h5>*This project is continuously being updated in order to improve functionality</h5>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))
