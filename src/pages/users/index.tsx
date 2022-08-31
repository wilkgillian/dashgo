import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
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
import { useEffect } from 'react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  useEffect(() => {
    fetch('https://localhost:3000/api/users').then(response =>
      response.json().then(data => console.log(data))
    );
  }, []);

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
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Wilk Gillian</Text>
                    <Text fontSize="sm" color="gray.300">
                      wilkrosa1998@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
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
                          <Icon as={RiEditLine} /> <Text ml={2}>Editar</Text>
                        </Flex>
                      ) : (
                        <Icon as={RiEditLine} />
                      )}
                    </Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Wilk Gillian</Text>
                    <Text fontSize="sm" color="gray.300">
                      wilkrosa1998@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
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
                          <Icon as={RiEditLine} /> <Text ml={2}>Editar</Text>
                        </Flex>
                      ) : (
                        <Icon as={RiEditLine} />
                      )}
                    </Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Wilk Gillian</Text>
                    <Text fontSize="sm" color="gray.300">
                      wilkrosa1998@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
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
                          <Icon as={RiEditLine} /> <Text ml={2}>Editar</Text>
                        </Flex>
                      ) : (
                        <Icon as={RiEditLine} />
                      )}
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
