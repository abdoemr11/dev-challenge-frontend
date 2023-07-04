interface InputProps {
    label: string,
    placeholder: string,
    raduisLocation: 't' | 'b',
    setFocus?: any
    value: string | number
    setValue: any
    type?: string
}
export default function SearchInput({ label, placeholder, raduisLocation, setFocus, value, setValue, type }: InputProps) {

    return (
        <div className="  relative bg-white ">
            <label className=" absolute left-6 top-3  text-textPrimary text-[9px] font-extrabold uppercase"
                htmlFor={label}>
                {label}
            </label>
            <input className={`block px-6 pt-6 pb-3  bg-white rounded-${raduisLocation}-2xl sm:rounded-2xl text-textPrimary
                                text-sm font-normal h-full w-full border outline-1`}
                placeholder={placeholder}
                id={label}
                type={type ? type : "text"}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setTimeout(() => setFocus(false), 100) }}
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
        </div>
    )
}