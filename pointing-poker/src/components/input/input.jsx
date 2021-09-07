import { Input } from '@chakra-ui/react';

export const InputComponent = ({
  width,
  textContent,
  height,
  onChange,
  variant,
  placeholder,
  focusBorderColor,
  type,
  className
}) => {
  return (
    <Input
      width={width}
      focusBorderColor={focusBorderColor}
      height={height}
      onChange={onChange}
      variant={variant}
      placeholder={placeholder}
      type={type}
      className={className}
      style={{ border: '1px solid black' }}
    >
      {textContent}
    </Input>
  );
};
