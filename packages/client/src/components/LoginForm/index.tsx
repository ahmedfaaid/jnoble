import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import {
  FormContainer,
  InputLabel,
  RoleSelectContainer
} from './LoginForm.styled';
import { Loading } from '../../styles/utils';
import { Field } from '../InputField/InputField.styled';

const SubUserLogin = loader('../../graphql/mutations/subUserLogin.graphql');
const CandidateLogin = loader('../../graphql/mutations/candidateLogin.graphql');

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [role, setRole] = useState('worker');
  const [formDetails, setFormDetails] = useState({
    email: '',
    password: ''
  });

  const [loginSubUser] = useMutation(SubUserLogin, {
    onCompleted: subUser => subUser
  });
  const [loginCandidate] = useMutation(CandidateLogin, {
    onCompleted: candidate => candidate
  });

  const history = useHistory();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setFormDetails(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);

    e.preventDefault();

    let user;

    if (role === 'employer') {
      user = await loginSubUser({
        variables: {
          ...formDetails
        }
      });
    } else if (role === 'worker') {
      user = await loginCandidate({
        variables: {
          ...formDetails
        }
      });
    }

    setFormDetails({
      email: '',
      password: ''
    });

    console.log({ user });

    history.push('/dashboard');

    setLoading(false);

    return user;
  };

  if (loading) {
    return (
      <FormContainer>
        <Loading location='login' />
      </FormContainer>
    );
  }

  // if (error) {
  //   return (
  //     <FormContainer>
  //       <h2>There was an error</h2>
  //     </FormContainer>
  //   )
  // }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <RoleSelectContainer>
          <Field>
            <input
              type='radio'
              name='role'
              value='worker'
              id='worker'
              checked={true}
              onChange={e => setRole(e.target.value)}
            />
            <label htmlFor='worker'>Worker</label>
          </Field>
          <Field>
            <input
              type='radio'
              name='role'
              value='employer'
              id='employer'
              onChange={e => setRole(e.target.value)}
            />
            <label htmlFor='employer'>Employer</label>
          </Field>
        </RoleSelectContainer>
        <Field>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <input
            type='text'
            name='email'
            placeholder='Email Address'
            value={formDetails && formDetails.email ? formDetails.email : ''}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <input
            type='text'
            name='password'
            placeholder='Password'
            value={
              formDetails && formDetails.password ? formDetails.password : ''
            }
            onChange={handleChange}
          />
        </Field>
        <Field>
          <button type='submit'>Login</button>
        </Field>
        <Field>
          <p>
            Not registered? <Link to='/signup'>Sign Up</Link>
          </p>
        </Field>
      </form>
    </FormContainer>
  );
}
