import type { NextPage } from 'next';
import { Button, Flex, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input isRequired={true} type="email" name="email" label="E-mail" />
          <Input
            isRequired={true}
            type="password"
            name="password"
            label="Senha"
          />
        </Stack>
        <Button type="submit" mt={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
