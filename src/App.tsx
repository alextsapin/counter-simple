import React from 'react';
import Button from './components/Button/Button';
import TextField from '@mui/material/TextField';

const App = () => {
    const [inc, setInc] = React.useState(0);
    const [maxInc, setMaxInc] = React.useState(5);

    // Сообщение
    const [message, setMessage] = React.useState<boolean | string>(false);

    // Ошибки ввода
    const [minValError, setMinValError] = React.useState(false);
    const [maxValError, setMaxValError] = React.useState(false);

    // Блокировка кнопок
    const [disabledControlButton, setDisabledControlButton] = React.useState(true);
    const [disabledIncButton, setDisabledIncButton] = React.useState(false);
    const [disabledResetButton, setDisabledResetButton] = React.useState(false);

    // Значения
    const [maxValue, setMaxValue] = React.useState(5);
    const [minValue, setMinValue] = React.useState(0);

    function callBackInc() {
        setInc(inc + 1)
    }

    function callBackReset() {
        setInc(minValue)
    }

    // Изменим минимальное значение
    function changeMinValue(minValue: number) {
        setMessage('Set values!')
        // Блокировка кнопок
        setDisabledIncButton(true)
        setDisabledResetButton(true)
    
        if(minValue >= 0 && minValue < maxValue) {
            setDisabledControlButton(false)
            setMinValue(minValue)
            setMinValError(false)
        } else {
            setMessage('Incorrect value!')
            setDisabledControlButton(true)
            setMinValue(minValue)
            setMinValError(true)
        }
    }

    // Изменим максимальное значение
    function changeMaxValue(maxValue: number) {
        setMessage('Set values!')
        // Блокировка кнопок
        setDisabledIncButton(true)
        setDisabledResetButton(true)

        if(maxValue > minValue) {
            setDisabledControlButton(false)
            setMaxValue(maxValue)
            setMaxValError(false)
        } else {
            setMessage('Incorrect value!')
            setDisabledControlButton(true)
            setMaxValue(maxValue)
            setMaxValError(true)
        }
    }

    function setValues() {
        setMessage(false)
        setInc(minValue)
        setMaxInc(maxValue)
        setDisabledControlButton(false)
        setMessage(false)

        // Разблокировка кнопок
        setDisabledIncButton(false)
        setDisabledResetButton(false)
    }

    return (
        <div className="container-xxl">
            <div className="row">
                <div className="col-md-4">
                    <div className="incBox">
                        <TextField 
                            label="Max value" 
                            color="primary" 
                            error={maxValError} 
                            type="number" 
                            focused 
                            onChange={e => changeMaxValue(+e.currentTarget.value)} 
                            value={maxValue}
                        />

                        <TextField 
                            className="mt-4" 
                            label="Min value" 
                            color="primary" 
                            error={minValError}
                            type="number" 
                            focused 
                            onChange={e => changeMinValue(+e.currentTarget.value)} 
                            value={minValue}
                        />

                        <div className="btnBox btnBox__set mt-3">
                            <Button title='SET' callBack={setValues} inc={inc} disabled={disabledControlButton}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="incBox">
            
                        {
                            message
                            ? <p className={(maxValError === true ||  minValError === true) ? 'incBox__text incBox__text_red' : 'incBox__text'}>{message}</p>
                            : <p className={inc === maxInc ? 'incBox__text incBox__text_red' : 'incBox__text'}>{inc}</p>

                        }
     
                        <div className="btnBox">
                            <Button title='INC' callBack={callBackInc} inc={inc} disabled={inc === maxInc ? true : false || disabledIncButton}/>
                            <Button title='RESET' callBack={callBackReset} inc={inc} disabled={inc === minValue ? true : false || disabledResetButton}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;