import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userInterface } from '../../interfaces/Users'

import './CreateUser.css'

const CreateUser = () => {
  const navigate = useNavigate()
  const initialValues: userInterface = {
    username: '',
    password: '',
  }

  const validationSchema: Yup.ObjectSchema<userInterface> = Yup.object().shape({
    username: Yup.string().min(6).max(20).required('Informe um usuário!!'),
    email: Yup.string().email('Email inválido!').required('Informe um email!'),
    password: Yup.string().min(4).max(15).required('Informe uma senha!'),
  })

  const onSubmit = (data: userInterface) => {
    axios.post('http://localhost:3000/users', data).then(() => {
      navigate('/')
    })
    console.log('data', data)
  }

  return (
    <div className="create-user-page">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
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
            <label>Email:</label>
            <ErrorMessage name={'email'} component={'span'} />
            <Field
              id={'inputEmail'}
              name={'email'}
              placeholder={'Seu melhor email!'}
            />
          </div>
          <div className="input-cntr">
            <label>Password:</label>
            <ErrorMessage name={'password'} component={'span'} />
            <Field
              id={'inputPassword'}
              type={'password'}
              name={'password'}
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
