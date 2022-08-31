import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect
} from 'react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';

export default function UserList() {
  const { data, isLoading, error } = useQuery(
    'users',
    async () => {
      const response = await fetch('https://localhost:3000/api/users');
      const data = await response.json();

      const users = data.users.map(
        (user: {
          id: number;
          name: string;
          email: string;
          createdAt: string;
        }) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })
          };
        }
      );
      return users;
    },
    {
      staleTime: 1000 * 5
    }
  );

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={['4', '4', '6']}>
        <Sidebar />
        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify="center">
              {' '}
              <Spinner />{' '}
            </Flex>
          ) : error ? (
            <Flex justify="center">
              {' '}
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" w={8}>
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th w={4}>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(
                    (user: {
                      id: number;
                      name: string;
                      email: string;
                      createdAt: string;
                    }) => {
                      return (
                        <Tr key={user.id}>
                          <Td px={['4', '4', '6']}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
                          <Td>
                            <Flex>
                              <Button
                                as="a"
                                size="sm"
                                fontSize="small"
                                colorScheme="teal"
                              >
                                {isWideVersion ? (
                                  <Flex justify="space-between">
                                    <Icon as={RiEditLine} />{' '}
                                    <Text ml={2}>Editar</Text>
                                  </Flex>
                                ) : (
                                  <Icon as={RiEditLine} />
                                )}
                              </Button>
                            </Flex>
                          </Td>
                        </Tr>
                      );
                    }
                  )}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
