import {
  Box,
  Link as ChakraLink,
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
import { GetServerSideProps } from 'next/types';
import { useState } from 'react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import { api } from '../../services/api';
import { getUsers, useUsers } from '../../services/hooks/useUsers';
import { queryClient } from '../../services/queryClient';

export default function UserList(/*{ users }*/) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(
    page /*, {
    initialData: users
  }*/
  );
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`users/${userId}`);
        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10
      }
    );
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={['4', '4', '6']}>
        <Sidebar />
        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.50" ml={4} />
              )}
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
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <ChakraLink
                              color="purple.400"
                              fontWeight="bold"
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              {user.name}
                            </ChakraLink>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.created_at}</Td>}
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
                  })}
                </Tbody>
              </Table>
              <Pagination
                totalCountRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users, totalCount } = await getUsers(1);
//   return {
//     props: {
//       users
//     }
//   };
// };
