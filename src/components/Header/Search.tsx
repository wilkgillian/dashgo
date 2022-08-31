import { Flex, Icon, Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  console.log(searchInputRef.current?.value)
  return (
    <Flex
      as="label"
      flex={1}
      py={4}
      px={8}
      ml={6}
      maxWidth={400}
      alignSelf="center"
      color="gray.600"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px={4}
        mr={4}
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400'
        }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize={20} cursor="pointer" />
    </Flex>
  );
}
