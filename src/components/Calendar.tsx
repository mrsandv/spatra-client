import React, { useState } from "react";
import styled from "styled-components";
import { Button, Text } from "@chakra-ui/react";
import { InlineWidget } from "react-calendly";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 40px;
`;

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

const Information = styled.div`
  display: flex;
`;

const Calendar = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  const idFile = new Buffer.from(data.idFile.data).toString("ascii");
  const eraFile = new Buffer.from(data.eraFile.data).toString("ascii");
  return (
    <Wrapper>
      <Information>
        <List>
          <Text>
            <b>Name:</b> {data.name}
          </Text>
          <Text>
            <b>Middle:</b> {data.middleName}
          </Text>
          <Text>
            <b>Last:</b> {data.lastName}
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
            <b>Native lang:</b> {data.firstLanguage}
          </Text>
          <Button
            colorScheme="red"
            mt={10}
            onClick={() => {
              setOpen(true);
            }}
          >
            Schedule exam
          </Button>
        </List>
        <ImageWrap>
          <Label>Id file</Label>
          <Image src={idFile} />
          <Label>Era file</Label>
          <Image src={eraFile} />
        </ImageWrap>
      </Information>
      {open && (
        <InlineWidget
          url="https://calendly.com/spanish-ta"
          prefill={{
            email: data.email,
            firstName: data.name,
            lastName: data.middleName,
            name: `${data.name} ${data.middleName}`,
          }}
        />
      )}
    </Wrapper>
  );
};

export default Calendar;
