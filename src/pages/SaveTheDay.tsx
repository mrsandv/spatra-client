import React from "react";
import { Button, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  searchApplicantByEmail,
  searchApplicantByFolio,
} from "../redux/modules/applicants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 40px;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ce6262;
  &:hover {
    font-weight: 700;
  }
`;

const Form = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
`;

const SearchWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
  }
`;

const Column = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  margin: 0 20px;
  @media screen and (max-width: 780px) {
    margin: 0 auto;
    width: 80%;
  }
`;

const SaveTheDay = () => {
  const applicant = useSelector((state: any) => state.applicants.applicant);
  const dispatch = useDispatch();
  const [folio, setFolio] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Wrapper>
      <Link to="/">
        <Label>Regresar</Label>
      </Link>
      {applicant ? (
        <Calendar data={applicant} />
      ) : (
        <SearchWrapper>
          <Column width="50%">
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                dispatch(searchApplicantByFolio({ folio }));
              }}
            >
              <p>
                To reservate your application exam write down your registration
                folio
              </p>
              <Input
                placeholder="Folio"
                m={5}
                required
                onChange={(e: any) => setFolio(e.target.value)}
              />
              <Button
                type="submit"
                m={5}
                rightIcon={<MdSend />}
                colorScheme="green"
                variant="solid"
                disabled={!folio || !!email}
              >
                Search by folio
              </Button>
            </Form>
          </Column>
          <Column width="50%">
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                dispatch(searchApplicantByEmail(email));
              }}
            >
              <p>or if you don't remember your folio try with email</p>
              <Input
                placeholder="E-mail"
                m={5}
                type="email"
                required
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                m={5}
                rightIcon={<MdSend />}
                colorScheme="green"
                variant="solid"
                disabled={!email || !!folio}
              >
                Search by email
              </Button>
            </Form>
          </Column>
        </SearchWrapper>
      )}
    </Wrapper>
  );
};

export default SaveTheDay;
