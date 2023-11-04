import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
function FontPicker() {
  return (
    <Menu>
      <MenuButton
        bg={'transparent'}
        _hover={{ bg: 'transparent' }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Pick Font
      </MenuButton>
      <MenuList bg={'gray.100'} padding={'24px'}>
        <MenuItem>Sans Serif</MenuItem>
        <MenuItem>Serif</MenuItem>
        <MenuItem>Mono</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default FontPicker;
