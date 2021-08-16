import React from "react";
import { Button, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import { useDispatch } from "react-redux";
import { searchApplicant } from "../redux/modules/applicants";

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;

function Home() {
  const dispatch = useDispatch();
  const [folio, setFolio] = useState(null);
  return (
    <>
      <Link to="/" style={{ color: "red" }}>
        Regresar
      </Link>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          dispatch(searchApplicant({ folio }));
        }}
      >
        <p>Para validar el folio y hacer la cita de tu examen </p>
        <Input
          placeholder="Folio"
          m={5}
          required
          onChange={(e: any) => setFolio(e.target.value)}
        />
        <Calendar />
        <Button
          type="submit"
          m={5}
          rightIcon={<MdSend />}
          colorScheme="green"
          variant="solid"
          disabled={!folio}
        >
          Search my status
        </Button>
      </Form>
    </>
  );
}

export default Home;
