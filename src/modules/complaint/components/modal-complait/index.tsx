import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";

interface ModalComplaitProps {
  title: string;
  descriptions: string;
  isOpen: boolean;
  onRequestClosedModal: () => void;
}

export default function ModalComplait({
  title,
  descriptions,
  isOpen,
  onRequestClosedModal,
}: ModalComplaitProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onRequestClosedModal();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="bold" color="black">
            {title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            value={descriptions}
            key="jabinho"
            h="20vh"
            color="black"
            disabled
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => onRequestClosedModal()}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
