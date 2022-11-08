import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";

import Link from "next/link";
import ModalComplait from "../../components/modal-complait";
import { useState } from "react";
import { useComplait } from "./../../../service/hooks/useComplait";
import { api } from "@/modules/service/api";
import { queryClient } from "@/modules/service/query-react";
export default function ComplaitTable() {
  const [openModal, setOpenModal] = useState(false);
  const [itemComplat, setItemComplait] = useState({
    title: "",
    desc: "",
  });

  const { data } = useComplait();
  function handleClosedModal() {
    setOpenModal(false);
  }

  async function deleteComplait(id: string) {
    console.log(id);
    try {
      await api.delete(`/complaits/${id}`);
      queryClient.invalidateQueries("complaits");
    } catch (error) {
      alert("Erro ao deletar reclamação");
    }
  }

  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Complaits
            </Heading>
            <Link href="/complait/complait-comment" passHref>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item: any) => (
                <Tr key={item.desc}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{item.title}</Text>
                    </Box>
                  </Td>
                  <Td>12/04/2022</Td>
                  <Td>
                    <Flex display="flex" flexDirection="row">
                      <Button
                        as="a"
                        mr="4"
                        colorScheme="teal"
                        leftIcon={
                          <Icon
                            as={RiPencilLine}
                            fontSize="16"
                            onClick={() => {
                              setOpenModal(true);

                              setItemComplait({
                                title: item.title,
                                desc: item.desc,
                              });
                            }}
                          />
                        }
                      ></Button>
                      <Button
                        as="a"
                        colorScheme="teal"
                        variant="outline"
                        color="red"
                        leftIcon={
                          <Icon
                            as={AiTwotoneDelete}
                            fontSize="16"
                            onClick={() => deleteComplait(item.title)}
                          />
                        }
                      ></Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <ModalComplait
            title={itemComplat.title}
            descriptions={itemComplat.desc}
            isOpen={openModal}
            onRequestClosedModal={handleClosedModal}
          />
        </Box>
      </Flex>
    </Box>
  );
}
