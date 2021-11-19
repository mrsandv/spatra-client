import { Button, Input, Select, Checkbox } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import React, { useState } from "react";
import { saveApplicant } from "../redux/modules/applicants";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 40px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  margin: 50px auto;
  @media screen and (max-width: 780px) {
    flex-direction: column;
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

const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #ce6262;
`;

function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [firstLanguage, setFirstLanguage] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [eraFile, setEraFile] = useState("");
  const [idFile, setIdFile] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPoliciesAccepted, setIsPoliciesAccepted] = useState(false);

  const eraScreenshotHandler = async (e: any) => {
    const file = e.target.files[0];
    const base64 = (await convertBase64(file)) as string;
    setEraFile(base64);
  };

  const idDocumentHandler = async (e: any) => {
    const file = e.target.files[0];
    const base64 = (await convertBase64(file)) as string;
    setIdFile(base64);
  };

  const convertBase64 = (file: any) => {
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
    <Wrapper>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Step 1: Register for the exam
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  saveApplicant({
                    name,
                    middleName,
                    lastName,
                    age,
                    email,
                    gender,
                    nationality,
                    phone,
                    firstLanguage,
                    vacancy,
                    eraFile,
                    idFile,
                  })
                );
              }}
            >
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
                  placeholder="E-mail"
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
                  placeholder="Phone number"
                  type="tel"
                  required
                  m={5}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  placeholder="Native language"
                  type="text"
                  required
                  m={5}
                  onChange={(e) => setFirstLanguage(e.target.value)}
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
                {idFile && (
                  <img
                    src={idFile}
                    style={{ height: "100px", width: "200px" }}
                    alt="preview-idDoc"
                  />
                )}
                <Text>Id file (png or jpg)</Text>
                <input
                  placeholder="Identification file"
                  type="file"
                  accept="image/png, image/jpeg"
                  required
                  style={{ margin: "30px" }}
                  onChange={(e) => {
                    idDocumentHandler(e);
                  }}
                />
                {eraFile && (
                  <img
                    src={eraFile}
                    style={{ height: "100px", width: "200px" }}
                    alt="preview-era"
                  />
                )}
                <Text>ERA file (png or jpg)</Text>
                <input
                  type="file"
                  style={{ margin: "30px" }}
                  accept="image/png, image/jpeg"
                  required
                  onChange={(e) => {
                    eraScreenshotHandler(e);
                  }}
                />
                <Checkbox
                  isRequired
                  isChecked={isTermsAccepted}
                  onChange={(e) => {
                    setIsTermsAccepted(!isTermsAccepted);
                  }}
                >
                  <p
                    style={{ margin: "15px 0" }}
                    onClick={() => {
                      Swal.fire({
                        title: "Confidentiality agreement",
                        text: "example text",
                        icon: "info",
                        confirmButtonText: "I agree",
                      }).then(() => setIsTermsAccepted(!isTermsAccepted));
                    }}
                  >
                    I accept the terms and conditions.
                  </p>
                </Checkbox>
                <Checkbox
                  isRequired
                  isChecked={isPoliciesAccepted}
                  onChange={(e) => {
                    setIsPoliciesAccepted(!isPoliciesAccepted);
                  }}
                >
                  <p
                    style={{ margin: "15px 0" }}
                    onClick={() => {
                      Swal.fire({
                        title: "Confidentiality agreement",
                        text: "example text",
                        icon: "info",
                        confirmButtonText: "I agree",
                      }).then(() => setIsPoliciesAccepted(!isPoliciesAccepted));
                    }}
                  >
                    I accept the confidentiality agreement
                  </p>
                </Checkbox>
                <Button
                  disabled={
                    !(
                      name &&
                      lastName &&
                      isTermsAccepted &&
                      isPoliciesAccepted &&
                      age &&
                      email &&
                      gender &&
                      nationality &&
                      phone &&
                      firstLanguage &&
                      vacancy &&
                      eraFile &&
                      idFile
                    )
                  }
                  type="submit"
                  m={5}
                  rightIcon={<MdSend />}
                  colorScheme="green"
                  variant="solid"
                >
                  Register information
                </Button>
              </Column>
            </Form>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Step 2: Make your payment
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div id="smart-button-container">
              <div style={{ textAlign: "center" }}>
                <div id="paypal-button-container"></div>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size="lg">
                  Step 3: Book your evaluation
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Wait at least 48 hours after your payment to save the date
            <br />
            <br />
            <Link style={{ margin: "30px 0" }} to="/save-the-day">
              <Button colorScheme="red">I already registered</Button>
            </Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
}

export default Home;
