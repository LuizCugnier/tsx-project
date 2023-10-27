import { ErrorMessage, Field, Formik, Form } from 'formik'
import { userInterface } from '../../interfaces/Users'
import * as Yup from 'yup'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const initialValues: userInterface = {
    username: '',
    password: '',
  }

  const validationSchema: Yup.ObjectSchema<userInterface> = Yup.object().shape({
    username: Yup.string().min(6).max(20).required('Informe um usuário!!'),
    password: Yup.string().min(4).max(15).required('Informe uma senha!'),
  })

  const onSubmit = (data: userInterface) => {
    axios.post('http://localhost:3301/users/login', data).then((response) => {
      if (response.data.error) {
        alert(response.data.error)
      } else {
        sessionStorage.setItem('accessToken', response.data.token)
        navigate('/')
      }
    })
  }
  return (
    <div className="login-page">
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
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
