import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { ButtonComponent } from '../button/button';
import { InputComponent } from '../input/input';
import './form.scss';
export const Form = () => {
  return (
    <Fragment>
      <FormControl isRequired>
        <FormLabel>Your first name:</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl>
        <FormLabel>Your last name:</FormLabel>
        <Input placeholder="Last name" />
        <FormLabel>Your job position:</FormLabel>
        <Input placeholder="Job position" />
      </FormControl>
      <FormControl>
        <FormLabel>Image:</FormLabel>
        <div style={{ display: 'flex' }}>
          <InputComponent
            placeholder={'Choose file'}
            width={276}
            height={47}
            type={'file'}
          />
          <ButtonComponent
            textContent="download"
            colorScheme={'facebook'}
            height={47}
            width={189}
          />
        </div>
        <div className="user__avatar"></div>
      </FormControl>
    </Fragment>
  );
};
