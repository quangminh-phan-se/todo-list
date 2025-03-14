import { Box, VStack, HStack, Text, IconButton, useDisclosure, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { LuPhone } from "react-icons/lu"

export default function DashboardLayout() {
  const { open, onToggle } = useDisclosure()

  return (
    <Box>
      <VStack h='100px' bgColor='red'>
        <Text>Sidebar</Text>
      </VStack>
      <Flex h='calc(100vh - 100px)'>
        <HStack w={open ? 72 : 12} bg='yellow'>
          <IconButton aria-label="Search database" onChange={onToggle}>
            <LuPhone />
          </IconButton>
          <Text>Navbar</Text>
        </HStack>
        <HStack>
          <Outlet />
        </HStack>
      </Flex>
    </Box>
  )
}