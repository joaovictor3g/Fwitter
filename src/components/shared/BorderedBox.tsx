import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BorderedBoxProps extends BoxProps {
  children: ReactNode;
}

export function BorderedBox({ children, ...rest }: BorderedBoxProps) {
  return (
    <Box
      borderBottomWidth="1px"
      borderColor="border"
      borderStyle="solid"
      {...rest}
    >
      {children}
    </Box>
  );
}
