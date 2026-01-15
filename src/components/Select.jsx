import React from 'react'
import { forwardRef } from 'react';
import { useId } from 'react'


const Select = forwardRef(({
   ref, options, label, className = '', ...props
}) => {

    const id = useId();
  return (
    <div>
        {label && <label htmlFor={id} className=''></label>}
        <select id={id} ref={ref}{...props} className={`px-3 py-2 rounded-lg text-black bg-white outline-none focus-bg-gray-50 duration-200 border border-gray w-full ${className}`}>
           {
            options?.map((option)=>(<option key={option} value={option}>{option}</option>))
           }
        </select>
    </div>
  )
})

export default Select
//export default forwardRef(Select);