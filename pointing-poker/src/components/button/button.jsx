import { Button } from '@chakra-ui/react';

export const ButtonComponent = ({
  width,
  textContent,
  height,
  onClick,
  variant
}) => {
  return (
    <Button
      width={width}
      colorScheme="green"
      height={height}
      onClick={onClick}
      variant={variant}
    >
      {textContent}
    </Button>
  );
};
