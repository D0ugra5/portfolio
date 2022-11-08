import { api } from "@/modules/service/api";
import { Button, Flex, Icon, Input, Text, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function ComplaintComment() {
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();
  async function handleCreateUser(value: any) {
    await api.post("/complaits", {
      title: value.title,
      desc: value.desc,
    });

    router.push("/complait/complait-table");
  }

  return (
    <Flex
      as="form"
      h="100%"
      w="100%"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
      onSubmit={handleSubmit(handleCreateUser)}
    >
      <Text mb="8" fontSize="50">
        {" "}
        Reclame Aqui
      </Text>
      <Input
        w="20vw"
        h="3rem"
        required
        mb="6"
        placeholder="Digite um titulo para reclamação"
        {...register("title")}
      />
      <Textarea
        required
        {...register("desc")}
        w="50vw"
        h="30vh"
        placeholder="Descreva Sua reclamação Aqui"
      />
      <Flex alignItems="flex-end" mt="8">
        <Button
          type="submit"
          isLoading={formState.isSubmitting}
          p="2"
          mt="6"
          mr="6"
          w="15rem"
          colorScheme="blue"
        >
          Enviar Resposta
        </Button>
        <Link href="/complait/complait-table">
          <Button mt="6" colorScheme="red">
            <Text mr="2">Voltar para tabela de reclamação</Text>
            <Icon mt="0.5" as={AiOutlineArrowRight} />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
