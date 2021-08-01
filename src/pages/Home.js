import { Button, Input, Select, useDisclosure } from "@chakra-ui/react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import Congrats from "../components/Congrats";

const Form = styled.form`
  width: 90%;
  display: flex;
  margin: 50px auto;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: ${(width) => width};
  margin: 0 20px;
`;

function Home() {
  const [name, setName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [phone, setPhone] = useState(null);
  const [firstLanguaje, setFirstLanguaje] = useState(null);
  const [vacancy, setVacancy] = useState(null);
  const [eraScreenshot, setEraScreenshot] = useState(null);
  const [idDocument, setIdDocument] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const eraScreenshotHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setEraScreenshot(base64);
  };

  const idDocumentHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setIdDocument(base64);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_SERVICE}/api/v1/users/create`,
        {
          name,
          middleName,
          lastName,
          age,
          email,
          gender,
          nationality,
          phone,
          firstLanguaje,
          vacancy,
          eraScreenshot,
          idDocument,
        }
      );
      console.log(res);
      onOpen();
    } catch (error) {
      console.log(error.response);
    }
    // console.log({ name, middleName, lastName, age, email, gender, nationality, phone, firstLanguaje, vacancy, eraScreenshot, idDocument })
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      <Form onSubmit={handleRegister}>
        <Column width="33%">
          <Input
            placeholder="Name"
            m={5}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Middle Name (optional)"
            m={5}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            m={5}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="Age"
            m={5}
            required
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            required
            m={5}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Column>
        <Column width="33%">
          <Select
            placeholder="Gender"
            m={5}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Prefer not to say</option>
          </Select>
          <Input
            placeholder="Nationality"
            required
            m={5}
            onChange={(e) => setNationality(e.target.value)}
          />
          <Input
            placeholder="Phone"
            type="tel"
            required
            m={5}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="Native Languaje"
            type="text"
            required
            m={5}
            onChange={(e) => setFirstLanguaje(e.target.value)}
          />
          <Input
            placeholder="Applied vacancy"
            type="text"
            required
            m={5}
            onChange={(e) => setVacancy(e.target.value)}
          />
        </Column>
        <Column width="33%">
          <label style={{ margin: "0 20px" }}>
            Electronic Recruitment Application file
          </label>
          <input
            type="file"
            required
            style={{ margin: "30px" }}
            onChange={(e) => {
              eraScreenshotHandler(e);
            }}
          />
          {eraScreenshot && (
            <img
              src={eraScreenshot}
              style={{ height: "100px", width: "200px" }}
              alt="preview-era"
            />
          )}
          <label style={{ margin: "0 20px" }}>Id file</label>
          <input
            type="file"
            style={{ margin: "30px" }}
            required
            onChange={(e) => {
              idDocumentHandler(e);
            }}
          />
          {idDocument && (
            <img
              src={idDocument}
              style={{ height: "100px", width: "200px" }}
              alt="preview-idDoc"
            />
          )}
          <Button
            disabled={!(name || lastName)}
            type="submit"
            m={5}
            rightIcon={<MdSend />}
            colorScheme="green"
            variant="solid"
          >
            Registrar informacion
          </Button>
        </Column>
      </Form>
      <Congrats onClose={onClose} isOpen={isOpen} />
    </div>
  );
}

export default Home;
