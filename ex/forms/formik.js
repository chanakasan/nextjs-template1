import { Formik, Form, withFormik, useField } from 'formik';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
  Button
} from '@chakra-ui/react'

function validateName(value) {
	let error
	if (!value) {
		error = 'Name is required'
	} else if (value.toLowerCase() !== 'naruto') {
		error = "Jeez! You're not a fan 😱"
	}
	return error
}

function validate(values) {
  const errors = {}
  const name = validateName(values.name)
  if (name) {
    errors.name = name
  }
	return errors
}

const TextInput = (props) => {
  const [field, meta, helpers] = useField(props)
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{props.label}</FormLabel>
      <Input {...field} placeholder='name' />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

const MyForm = (props) => (
	<Form>
    <TextInput name='name' label='First Name' />
		<Button
			mt={4}
			colorScheme='teal'
			isLoading={props.isSubmitting}
			type='submit'
		>
			Submit
		</Button>
	</Form>
)

const initialValues = { name: 'Sasuke' }

const submitHandler = (values, actions) => {
	setTimeout(() => {
		alert(JSON.stringify(values, null, 2))
		actions.setSubmitting(false)
	}, 1000)
}

// const FormikExample = withFormik({
// 	mapPropsToValues: (props) => initialValues,
// 	validate: validate,
// 	onSubmit: submitHandler,
// })(MyForm)


function FormikExample() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitHandler}
    >
      {MyForm}
		</Formik>
	)
}

export default FormikExample
