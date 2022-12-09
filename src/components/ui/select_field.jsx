import React from 'react'
import { genUUId } from '../../utils/uniId'

const SelectField = ({ hook, colClass, name, inputClassName, breedLists, error, id, labelClass, label, options, flag, ...rest }) => {
    return (
        <div className={colClass}>
            {label && <label htmlFor={id} className={labelClass}>{label}</label>}
            <select name={name} {...hook(name)} className={inputClassName} id={id} {...rest}>
                <option selected>Select Option</option>
                {
                    breedLists ? Object.entries(breedLists).map(([key, value]) => (
                        <option value={key} key={key + " " + genUUId}>{key}</option>
                    )) : flag ? options.map((number) => (
                        <option selected={number == '1' ? true : false} value={number}>{number === '' ? 0 : number}</option>
                    )) : options.map((value) =>
                        <option value={value} key={value + " " + genUUId}>{value}</option>
                    )

                }


            </select>
            {error ? <div className="alert alert-error" role="alert">{error?.message}</div> : null}
        </div>
    )
}

export default SelectField