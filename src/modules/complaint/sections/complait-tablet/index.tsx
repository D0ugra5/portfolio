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

import Link from "next/link";
import ModalComplait from "../../components/modal-complait";
import { useState } from "react";
import { useComplait } from "./../../../service/hooks/useComplait";
export default function ComplaitTable() {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useComplait();

  function handleClosedModal() {
    setOpenModal(false);
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
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="teal"
                      leftIcon={
                        <Icon
                          as={RiPencilLine}
                          fontSize="16"
                          onClick={() => setOpenModal(true)}
                        />
                      }
                    ></Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <ModalComplait
            title="nada Mal"
            descriptions=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati quis quam officiis quos quidem, dolorem commodi itaque voluptatum iusto magni hic! Suscipit eum delectus nisi sequi dolores, laudantium magni!"
            isOpen={openModal}
            onRequestClosedModal={handleClosedModal}
          />
        </Box>
      </Flex>
    </Box>
  );
}
