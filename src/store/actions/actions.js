function handlePessoa(pessoa) {
    return {
        // Define e indica a ação que está sendo realizada e deve ser sempre única.
        type: 'SET_PESSOA',
        pessoa,
    }
}

function handleErrorAlert(control, index) {
    return {
        type: 'SET_ERROR_ALERT',
        control,
        index
    }
}

function handleErrorAlert(control, index) {
    return {
        
        type: 'SET_SUCCESS_ALERT',
        control,
        index
    }
}