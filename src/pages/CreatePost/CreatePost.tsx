import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { postInterface } from '../../interfaces/Posts'
import { useNavigate } from 'react-router-dom'

import './CreatePost.css'

const CreatePost = () => {
  const navigate = useNavigate()

  const initialValues = {
    title: '',
    postText: '',
    username: '',
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Informe um titulo!!'),
    postText: Yup.string().required('Escreva algo lindo antes!'),
    username: Yup.string().required('Seu melhor usuário!'),
  })

  const onSubmit = (data: postInterface) => {
    axios.post('http://localhost:3301/posts', data).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="create-post-page">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-container">
          <div className="input-cntr">
            <label>Title:</label>
            <ErrorMessage name={'title'} component={'span'} />
            <Field
              id={'inputCreatePost'}
              name={'title'}
              placeholder={'Titulo foda'}
            />
          </div>
          <div className="input-cntr">
            <label>Post Text:</label>
            <ErrorMessage name={'postText'} component={'span'} />
            <Field
              id={'inputCreatePost'}
              name={'postText'}
              placeholder={'Post pika'}
            />
          </div>
          <div className="input-cntr">
            <label>Username:</label>
            <ErrorMessage name={'username'} component={'span'} />
            <Field
              id={'inputCreatePost'}
              name={'username'}
              placeholder={'Username bacana'}
            />
          </div>
          <button type={'submit'} className="createpost-button">
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
