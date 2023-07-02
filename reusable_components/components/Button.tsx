import 'material-icons/iconfont/material-icons.css';

interface btnProps {
    children: React.ReactNode,
    variant?: 'outline' | 'text',
    disableShadow?: boolean,
    disabled?: boolean,
    startIcon?: string
    endIcon?: string
    size?: 'sm' | 'md' | 'lg',
    color?: 'default' | 'primary' | 'secondary' | 'danger  '
}

export default function Buttton({ children, variant, disableShadow, disabled, startIcon, endIcon, size, color }: btnProps) {
    let appliedStyle: Array<string> = [];
    appliedStyle.push('btn')
    if (variant)
        appliedStyle[0] = variant
    if (disabled)
        appliedStyle.push('disabled')
    if (size)
        appliedStyle.push(size)
    if (color)
        appliedStyle.push(color)
    return (
        <button className={appliedStyle.join(' ')} disabled={disabled}>
            {startIcon ? <span className="material-icons">{startIcon}</span> : null}
            {children}

            {endIcon ? <span className="material-icons">{endIcon}</span> : null}
        </button>
    )

}
