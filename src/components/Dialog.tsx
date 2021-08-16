import React from "react";
import {
  useDisclosure,
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
`;

const ImageWrap = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 50px;
  width: 150px;
`;

const Dialog = ({ data }: { data: any }) => {
  const eraFile = btoa(String.fromCharCode(...new Uint8Array(data.eraFile)));
  const idFile = btoa(String.fromCharCode(...new Uint8Array(data.idFile)));
  const { name, middleName, lastName } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        More info
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name + data.lastName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List>
              <Text>
                <b>Name:</b> {data.name}
              </Text>
              <Text>
                <b>Middle:</b> {data.middleName}
              </Text>
              <Text>
                <b>Last:</b> {data.laame}
              </Text>
              <Text>
                <b>Email:</b> {data.email}
              </Text>
              <Text>
                <b>Vacancy:</b> {data.vacancy}
              </Text>
              <Text>
                <b>Age:</b> {data.age}
              </Text>
              <Text>
                <b>Gender:</b> {data.gender}
              </Text>
              <Text>
                <b>Phone:</b> {data.phone}
              </Text>
              <Text>
                <b>Nationality:</b> {data.nationality}
              </Text>
              <Text>
                <b>Native lang:</b> {data.firstLanguaje}
              </Text>
            </List>
            <ImageWrap>
              <Image src={`data:image/png;base64,${eraFile}`} />
              <Image src={`data:image/png;base64,${idFile}`} />
            </ImageWrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dialog;
