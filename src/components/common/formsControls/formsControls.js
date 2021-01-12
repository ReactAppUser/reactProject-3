import React from 'react';
import { Field } from 'redux-form';
import styles from './formsControl.module.css';

const FormControl = ({ input, meta: {touched, error}, children}) => {

    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>
                {children}
            </div>
            { hasError && <span>Shit, this is ErRoR: {error} ;) </span>}
        </div>
    )


}

export const Textarea = (props) => {
    const { input, child, meta, ...restProps } = props;
    return <FormControl {...props}>< textarea {...input} {...restProps} /></FormControl>
}


export const Input = (props) => {
    const { input, child, meta, ...restProps } = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}


export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component}
            {...props}

        />  {text}
    </div>
)

