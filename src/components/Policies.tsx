import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

const Terms = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <p style={{ margin: "15px 0" }} onClick={onOpen}>
        I accept the confidentiality agreement
      </p>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confidentiality</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Example text</ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Terms;
