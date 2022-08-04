import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValitations ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setformValidation ] = useState( initialForm );

    useEffect(() => {
    
        createValidations();

    }, [formState]);
    
    
    const isFormValid = useMemo(()=> {

        for (const formValue of Object.keys(formValidation) ){
            if(formValidation[formValue] !== null) return false;
        }
        return true;
    
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidations = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValitations )) {
            const [ fn, errorMessage ] = formValitations[formField];
            
            formCheckedValues[`${formField}Valid`] = fn( formState[formField]) ? null : errorMessage;

            
        }
        console.log(formCheckedValues);
        

        setformValidation(formCheckedValues);


    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}