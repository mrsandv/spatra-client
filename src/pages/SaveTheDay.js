import { Button, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { MdChevronLeft, MdSend } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
`;

function Home() {
  const [folio, setFolio] = useState(null);

  return (
    <div>
      <Link to="/">
        <Button leftIcon={<MdChevronLeft />} colorScheme="blue">
          Regresar al registro
        </Button>
      </Link>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          // console.log({ name, middleName, lastName, age, email, gender, nationality, phone, firstLanguaje, vacancy, eraScreenshot, idDocument })
          await axios.post(
            `${process.env.REACT_APP_URL_SERVICE}/api/v1/users/create`,
            {
              folio,
            }
          );
        }}
      >
        <p>Para validar el folio y hacer la cita de tu examen</p>
        <Input
          placeholder="Folio"
          m={5}
          required
          onChange={(e) => setFolio(e.target.value)}
        />
        <Calendar />
        <Button
          type="submit"
          m={5}
          rightIcon={<MdSend />}
          colorScheme="green"
          variant="solid"
        >
          Registrar informacion
        </Button>
      </Form>
    </div>
  );
}

export default Home;
