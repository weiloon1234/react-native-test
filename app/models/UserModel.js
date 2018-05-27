import t from 'tcomb-form-native';
import { formStyles } from '../styles';

export const LoginUserModel = t.struct({
  username: t.String,
  password: t.String,
});

export const LoginUserModelOption = {
  fields: {
    username: {
      label: 'Username',
      error: 'Please keyin your username'
    },
    password: {
      type: 'password',
      secureTextEntry: true,
      label: 'Password',
      error: 'Please keyin your password'
    }
  },
  stylesheet: formStyles,
};