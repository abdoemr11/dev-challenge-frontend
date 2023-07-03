import 'material-icons/iconfont/material-icons.css';
import { useState } from 'react';
interface inputProps {
    disabled?: boolean,
    startIcon?: string
    endIcon?: string
    placehoder?: string,
    error?: boolean,
    helperText?: string,
    value?: string,
    size?: 'sm' | 'md',
    fullwidth?: boolean,
    multiline?: boolean,
    row?: string,
    column?: string,
}

export default function Input({ placehoder = "Placeholder", disabled, startIcon, endIcon, error = false, helperText, value = "",
    size = 'md', fullwidth = false, multiline = false, row, column }: inputProps) {

    let appliedStyle: Array<string> = [];
    const [isFocus, setFocus] = useState(false);
    const labelStyle = getLabelStyle(error, isFocus)
    const inputStyle = getInputStyle(error);
    const helperTextStyle = getHelperTextStyle(error);


    return (
        <div className={`input-container ${fullwidth ? 'fullwidth' : ''}`}>
            <label className={labelStyle} htmlFor="">Label</label>
            {multiline ?
                <textarea rows={Number(row)} cols={Number(column)} placeholder={placehoder} />
                :
                <div className={`input-stack input-${size} ${fullwidth ? 'input-lg' : ''}`}>
                    {startIcon ? <span className="material-icons icon-start">{startIcon}</span> : null}

                    <input className={inputStyle} disabled={disabled} placeholder={placehoder}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        defaultValue={value}
                    />
                    {endIcon ? <span className="material-icons icon-end">{endIcon}</span> : null}
                </div>
            }

            <p className={`helper - text ${helperTextStyle} `}>{helperText}</p>
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