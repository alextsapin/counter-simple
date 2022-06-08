import React from 'react';
import Button from '@mui/material/Button';

type PropsType = {
    title: string
    inc: number
    disabled: boolean
    callBack: () => void
}

const MyButton = (props: PropsType) => {
    return (
        <Button 
            className="button mx-2" 
            onClick={props.callBack} 
            disabled={props.disabled} variant="contained">{props.title}</Button>
    )
}

export default MyButton;