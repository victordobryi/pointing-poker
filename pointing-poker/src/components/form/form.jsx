import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';
import { ButtonComponent } from '../button/button';
import { InputComponent } from '../input/input';
import './form.scss';
export const Form = () => {
  const [image, setImage] = useState(null);
  const [ava, setAva] = useState(null);
  const [imageName, setImageName] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0].name);
    }
  };

  const addAvatarOnBlock = () => {
    setAva(image);
  };

  return (
    <Fragment>
      <FormControl isRequired>
        <FormLabel>Your first name:</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl>
        <FormLabel>Your last name:</FormLabel>
        <Input placeholder="Last name" />
      </FormControl>
      <FormControl>
        <FormLabel>Your job position:</FormLabel>
        <Input placeholder="Job position" />
      </FormControl>
      <FormControl>
        <FormLabel>Image:</FormLabel>
        <div style={{ display: 'flex' }}>
          <InputComponent
            type={'file'}
            onChange={onImageChange}
            className={'filetype'}
          />
          <FormLabel className="choose__avatar">
            {imageName ? imageName : 'Choose file'}
          </FormLabel>
          <ButtonComponent
            textContent="download"
            colorScheme={'facebook'}
            height={47}
            width={189}
            onClick={addAvatarOnBlock}
          />
        </div>
        <div
          className="user__avatar"
          style={{
            backgroundImage: `url('${ava}')`,
            backgroundSize: 'cover'
          }}
        ></div>
      </FormControl>
    </Fragment>
  );
};
