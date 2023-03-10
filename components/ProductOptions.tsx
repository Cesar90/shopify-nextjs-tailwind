import React from 'react'
import { ISingleProduct } from "../utils/interface"

interface IOptions{
  [x:string]:string
}

interface IProps{
  name: string
  values: string[]
  selectOptions: IOptions
  setOptions: (name: string, value: string) => void
}

export default function ProductOptions({name, values, selectOptions, setOptions}:IProps) {
  return (
    <fieldset className="mt-3">
        <legend className="text-xl font-semibold">
          {name}
        </legend>
        <div className="inline-flex items-center flex-wrap">
          {
            values.map(value => {
              const id = `option-${name}-${value}`
              let checked = selectOptions[name] === value
              // let checked2 = !!checked // convert to boolean
              return (
                <label key={id} htmlFor={id} >
                  <input 
                    type="radio" 
                    className="sr-only" 
                    id={id} 
                    name={`option-${name}`} 
                    checked={checked}
                    onChange={() => setOptions(name, value)}/>
                    <div className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 ${checked ? "text-white bg-gray-900" : "text-gray-900 bg-gray-200"}`}>
                      <span className="px-2">{value}</span>
                    </div>
                </label>
              )
            })
          }
        </div>
    </fieldset>
  )
}


