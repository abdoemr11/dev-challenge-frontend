interface InputProps {
    label: string,
    placeholder: string,
    raduisLocation: 't' | 'b',
    setFocus?: any
}
export default function SearchInput({ label, placeholder, raduisLocation, setFocus }: InputProps) {

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
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
            />
        </div>
    )
}