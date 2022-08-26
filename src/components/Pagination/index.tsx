import { Box, Stack } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

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
        <PaginationItem isCurrent={true} number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </Stack>
    </Stack>
  );
}
