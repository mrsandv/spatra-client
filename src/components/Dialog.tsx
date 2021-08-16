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
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
`;

const Image = styled.img`
  height: 200px;
  width: 300px;
  margin: 10px;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ce6262;
  &:hover {
    font-weight: 700;
  }
`;

const Dialog = ({ data }: { data: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const idFile = new Buffer.from(data.idFile.data).toString("ascii");
  const eraFile = new Buffer.from(data.eraFile.data).toString("ascii");
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        More info
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${data.name} ${data.middleName}`}</ModalHeader>
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
              <Label>Id file</Label>
              <Image src={`data:image/png;base64,${idFile}`} />
              <Label>Era file</Label>
              <Image src={`data:image/png;base64,${eraFile}`} />
            </ImageWrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dialog;
