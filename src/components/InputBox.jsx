import { forwardRef } from "react"


const InputBox = forwardRef(function InputBox({
  type,
  value,
  onChangeValue,
  className = " ",
  placeholder = "",
  ...props
}, ref) {

  return (
    <>
      <input
         className={`w-full py-1 px-3 rounded-md outline-none ${className} text-sm`}
         type={type}
         ref = {ref}
         placeholder={placeholder}
         value={value}
         onChange={(e) => onChangeValue(e.target.value)}
         {...props}
          />
      
    </>
  );
})

export default InputBox
