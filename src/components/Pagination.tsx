import { Box, Button, Stack } from '@chakra-ui/react';

export default function Pagination() {
  return (
    <Stack
      direction="row"
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong>
        <strong>-</strong>
        <strong>10</strong>
        <strong> de </strong>
        <strong>100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          size="sm"
          fontSize="xs"
          w={4}
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w={4}
          bg="gray.700"
          disabled
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w={4}
          bg="gray.700"
          disabled
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w={4}
          bg="gray.700"
          disabled
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
