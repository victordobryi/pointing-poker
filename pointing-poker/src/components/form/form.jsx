import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ButtonComponent } from '../button/button';
import './form.scss';
import { useFormik } from 'formik';
import { validate } from '../form/form-validate';
import { useSelector, useDispatch } from 'react-redux';

export const FormComponent = ({ children }) => {
  const [image, setImage] = useState(null);
  const [ava, setAva] = useState(null);
  const [imageName, setImageName] = useState(null);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0].name);
    }
    formik.values.imageSrc = URL.createObjectURL(event.target.files[0]);
  };

  const addAvatarOnBlock = () => {
    setAva(image);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      jobPosition: '',
      fullName: '',
      imageSrc: '',
      id: '',
      isObserver: false
    },
    validate,
    onSubmit: (values) => {
      formik.values.id = new Date().valueOf();
      formik.values.isObserver = user.isObserver;
      formik.values.fullName =
        formik.values.firstName + ' ' + formik.values.lastName;
      dispatch({ type: 'SET_USER', payload: values });
      console.log(user);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        isRequired
        isInvalid={formik.touched.firstName && formik.errors.firstName}
      >
        <FormLabel>Your first name:</FormLabel>
        <div className="form__section">
          <Input
            placeholder="First name"
            className={'form__input'}
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <FormErrorMessage style={{ paddingLeft: '10px' }}>
            {formik.errors.firstName}
          </FormErrorMessage>
        </div>
      </FormControl>

      <FormControl
        isInvalid={formik.touched.lastName && formik.errors.lastName}
      >
        <FormLabel>Your last name:</FormLabel>
        <div className="form__section">
          <Input
            placeholder="Last name"
            className={'form__input'}
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <FormErrorMessage style={{ paddingLeft: '10px' }}>
            {formik.errors.lastName}
          </FormErrorMessage>
        </div>
      </FormControl>

      <FormControl
        isInvalid={formik.touched.jobPosition && formik.errors.jobPosition}
      >
        <FormLabel>Your job position:</FormLabel>
        <div className="form__section">
          <Input
            placeholder="job position"
            className={'form__input'}
            id="jobPosition"
            name="jobPosition"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobPosition}
          />
          <FormErrorMessage style={{ paddingLeft: '10px' }}>
            {formik.errors.jobPosition}
          </FormErrorMessage>
        </div>
      </FormControl>
      <FormControl>
        <FormLabel>Image:</FormLabel>
        <Flex>
          <Input
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
        </Flex>
        <div
          className="user__avatar"
          style={{
            backgroundImage: `url('${ava}')`,
            backgroundSize: 'cover'
          }}
        ></div>
      </FormControl>
      {children}
    </form>
  );
};
