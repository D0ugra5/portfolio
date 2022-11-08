import { Button, Flex, Icon, Text, Textarea } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function ComplaintComment() {
  return (
    <Flex
      as="form"
      h="100%"
      w="100%"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
    >
      <Text mb="8" fontSize="50">
        {" "}
        Reclame Aqui
      </Text>
      <Textarea w="50vw" h="30vh" placeholder="Descreva Sua reclamação Aqui" />
      <Flex alignItems="flex-end" mt="8">
        <Button p="2" mt="6" mr="6" w="15rem" colorScheme="blue">
          Enviar Resposta
        </Button>
        <Button mt="6" colorScheme="red">
          <Text mr="2">Voltar para tabela de reclamação</Text>
          <Icon mt="0.5" as={AiOutlineArrowRight} />
        </Button>
      </Flex>
    </Flex>
  );
}
