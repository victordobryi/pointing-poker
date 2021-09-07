import { Button } from '@chakra-ui/react';

export const ButtonComponent = ({
  width,
  textContent,
  height,
  onClick,
  variant,
  colorScheme,
  className
}) => {
  return (
    <Button
      width={width}
      colorScheme={colorScheme}
      height={height}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {textContent}
    </Button>
  );
};
