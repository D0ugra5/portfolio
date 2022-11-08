import ComplaintComment from "@/modules/complaint/sections/complaint-comment";
import { Flex, Center } from "@chakra-ui/react";

export default function Complaint() {
  return (
    <Center
      mt="20vh"
      flexDirection="column"
      display="flex"
      h="100%"
      justifyContent="center"
    >
      <ComplaintComment />
    </Center>
  );
}
