import 'material-icons/iconfont/material-icons.css';
import { useState } from 'react';
interface inputProps {
    disabled?: boolean,
    startIcon?: string
    endIcon?: string
    placehoder?: string,
    error?: boolean,
    helperText?: string
}

export default function Input({ placehoder = "Placeholder", disabled, startIcon, endIcon, error = false, helperText }: inputProps) {
    let appliedStyle: Array<string> = [];
    const [isFocus, setFocus] = useState(false);
    const labelStyle = getLabelStyle(error, isFocus)
    const inputStyle = getInputStyle(error);
    const helperTextStyle = getHelperTextStyle(error);


    return (
        <div className='input-container'>
            <label className={labelStyle} htmlFor="">Label</label>

            <div className="input-stack">
                {startIcon ? <span className="material-icons">{startIcon}</span> : null}

                <input className={inputStyle} disabled={disabled} placeholder={placehoder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                {endIcon ? <span className="material-icons">{endIcon}</span> : null}
            </div>
            <p className={`helper-text ${helperTextStyle}`}>{helperText}</p>
            {/* <textarea /> */}
        </div>

    )

}
function getLabelStyle(error: boolean, isFocus: boolean): string {
    let labelStyle: string
    if (error) {
        labelStyle = 'label-error'
    } else if (isFocus) {
        labelStyle = 'label-focus'
    } else {
        labelStyle = 'label-default'
    }
    return labelStyle
}
function getInputStyle(error: boolean): string {
    if (error) {
        return 'input-error';
    } else {
        return 'input-default';
    }
};

function getHelperTextStyle(error: boolean): string {
    if (error) {
        return 'helper-error';
    } else {
        return 'helper-default';
    }
}