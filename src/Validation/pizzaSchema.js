import * as yup from 'yup';

const schema = yup.object().shape({
    customer: yup.string().trim().required('Name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().trim().required('Please pick a size'),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    special: yup.string().trim()
})

export default schema;