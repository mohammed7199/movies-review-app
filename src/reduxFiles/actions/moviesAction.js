export const addFormData = (formData) =>{
    return {
        type: 'ADD_MOVIES',
        payload: formData
    }
}

export const removeMovie = (id) =>{
    return {
        type: 'REMOVE_ID',
        payload: id
    }
}