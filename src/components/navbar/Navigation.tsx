import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.svg';
import FontPicker from './FontPicker';

function Navigation() {
  return (
    <HStack display={'flex'}>
      <Image src={logo} alt='logo' boxSize={'32px'} />
      <FontPicker />
    </HStack>
  );
}

export default Navigation;
