import React from 'react';
import AppButton from '../AppButton';
import {useFormikContext} from 'formik';
function SumitButton({title, color}) {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} color={color} />;
}

export default SumitButton;
