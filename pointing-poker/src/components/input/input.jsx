import { Input } from '@chakra-ui/react';

export const InputComponent = ({
  width,
  textContent,
  height,
  onChange,
  variant,
  colorScheme,
  placeholder,
  focusBorderColor
}) => {
  return (
    <Input
      width={width}
      focusBorderColor={focusBorderColor}
      height={height}
      onChange={onChange}
      variant={variant}
      placeholder={placeholder}
    >
      {textContent}
    </Input>
  );
};
