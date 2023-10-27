import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { userInterface } from '../../interfaces/Users'

import './CreateUser.css'

const CreateUser = () => {
  const initialValues: userInterface = {
    username: '',
    password: '',
  }

  const validationSchema: Yup.ObjectSchema<userInterface> = Yup.object().shape({
    username: Yup.string().min(6).max(20).required('Informe um usuário!!'),
    password: Yup.string().min(6).max(15).required('Informe uma senha!'),
  })

  const handleSubmit = () => {}

  return (
    <div className="create-user-page">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-container">
          <div className="input-cntr">
            <label>Username:</label>
            <ErrorMessage name={'username'} component={'span'} />
            <Field
              id={'inputUsername'}
              name={'username'}
              placeholder={'Seu melhor usuário!'}
            />
          </div>
          <div className="input-cntr">
            <label>Password:</label>
            <ErrorMessage name={'password'} component={'span'} />
            <Field
              id={'inputPassword'}
              type={'password'}
              name={'Password'}
              placeholder={'Sua melhor senha!'}
            />
          </div>
          <div className="divButtons">
            <button type={'submit'} className="createButton">
              Create User
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateUser
