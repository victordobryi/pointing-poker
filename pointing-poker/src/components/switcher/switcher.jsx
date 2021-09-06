import { Switch } from '@chakra-ui/react';

export const Switcher = () => {
  return <Switch size="md" value="true" onChange={() => console.log('test')} />;
};
