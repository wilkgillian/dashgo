import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Wilk Gillian</Text>
        <Text color="gray.300" fontSize="small">
          wilkrosa1998@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Wilk Gillian"
        src="https://github.com/wilkgillian.png"
      />
    </Flex>
  );
}
