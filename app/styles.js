import { StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

export default styles = StyleSheet.create({

});


export const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
};