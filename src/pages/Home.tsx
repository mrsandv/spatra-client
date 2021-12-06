import {
  Button,
  Input,
  Select,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import preview from "../assets/preview.jpg";
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
  const [cPhone, setCPhone] = useState("");
  const [firstLanguage, setFirstLanguage] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [eraFile, setEraFile] = useState("");
  const [idFile, setIdFile] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPoliciesAccepted, setIsPoliciesAccepted] = useState(false);

  const eraScreenshotHandler = async (e: any) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      return Swal.fire(
        "File is too big",
        "Please resize the image, max file size 2MB format: png or jpg",
        "warning"
      );
    } else {
      const base64 = (await convertBase64(file)) as string;
      setEraFile(base64);
    }
  };

  const idDocumentHandler = async (e: any) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      return Swal.fire(
        "File is too big",
        "Please resize the image, max file size 2MB format: png or jpg",
        "warning"
      );
    } else {
      const base64 = (await convertBase64(file)) as string;
      setIdFile(base64);
    }
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
                  Step 1: Register for the evaluation
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
                    phone: cPhone + phone,
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
                <div style={{ display: "flex", width: "auto" }}>
                  <Input
                    style={{ width: "35%" }}
                    placeholder="Code"
                    type="tel"
                    minLength={1}
                    maxLength={4}
                    required
                    m={5}
                    onChange={(e) => setCPhone(e.target.value)}
                  />
                  <Input
                    placeholder="Phone number"
                    style={{ width: "75%" }}
                    type="tel"
                    minLength={6}
                    maxLength={12}
                    required
                    m={5}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
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
                <Text>ID file (png or jpg max size 2MB)</Text>
                {idFile ? (
                  <img
                    src={idFile}
                    style={{ height: "100px", width: "200px" }}
                    alt="preview-idDoc"
                  />
                ) : (
                  <img
                    src={preview}
                    style={{ height: "100px", width: "200px" }}
                    alt="preview-era"
                  />
                )}
                <input
                  placeholder="Identification file"
                  type="file"
                  accept="image/png, image/jpeg"
                  required
                  style={{ margin: "30px" }}
                  onChange={(e: any) => {
                    idDocumentHandler(e);
                  }}
                />
                <Text>ERA file (png or jpg max size 2MB)</Text>
                {eraFile ? (
                  <img
                    src={eraFile}
                    style={{ height: "100px", width: "200px" }}
                    alt="preview-era"
                  />
                ) : (
                  <img
                    src={preview}
                    style={{ height: "100px", width: "200px" }}
                    alt="preview-era"
                  />
                )}
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
                    style={{
                      margin: "15px 0",
                      color: "#008c7f",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      Swal.fire({
                        title: "General dispositions",
                        html: `Your privacy and trust are very important to Spanish Training Academy, SC. Therefore, we want to inform the holder (s) of the Personal Data (hereinafter, (the) "Holder (s)" or "You") how Spanish Training Academy safeguards the integrity, privacy and protection of your Personal Data (as said term is defined below), in adherence to the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (“Ley de Datos”) and its Regulations and the essential characteristics of its treatment, so that the Holders have full control and decision over them. Therefore, we recommend that you read the following information carefully.<br/><br/>
                        IDENTITY AND ADDRESS OF THE RESPONSIBLE PARTY<br/><br/>
                        The responsible party, Spanish Training Academy S.C. (hereinafter, “STA”), is a legally constituted and validly existing company in accordance with the laws of the United Mexican States, with registered office at Manuel Navarrete 49 Int. 202, Col. Algarín, Cuauhtémoc, Ciudad de México, México, C.P. 06880.<br/><br/>
                        PERSONAL DATA THAT MAY BE COLLECTED<br/><br/>
                        By registering for the Spanish Evaluation service for candidates and / or any other services and / or courses that are taught in and / or through STA, you agree that STA will collect the necessary Personal Data as part of your registration . STA may collect from you, stating without limitation (jointly referred to as "Personal Data"), full name, CURP, RFC, address, date of birth, telephone numbers, emails, address, nationality, etc. In case of requesting electronic invoicing, additionally, RFC, CURP, tax address and other necessary data for such purposes may be collected from you. STA may collect supplementary data from the Holder, but not limited to, for the registration process, and depending on the course, schooling, occupation, family environment, data on your social, emotional, health, sports behavior, as well as data to be collected at the time of enrollment and follow-up to allow the Holder to be evaluated regarding the STA courses. Similarly, STA will collect information from the Holders when they communicate by telephone to request information on the courses taught at STA, such as name, address, age, gender, telephone numbers, emails, etc.<br/><br/>
                        PURPOSES OF THE PROCESSING OF YOUR PERSONAL DATA<br/><br/>
                        The Personal Data mentioned in the previous section that STA collects, will be used as part of the Holder's file, as contact information to locate him/her, in case of emergencies, reports, notices and / or messages that need to be delivered directly, to verify tuition fees, reminders and / or delays in paying them. Likewise, the Holder's Personal Data will be used to comply with an administrative control, generate enrollments, reports, quality evaluation of services and / or internal statistical studies on teaching and / or evaluation services in STA. In general terms, any reason that directly or indirectly implies the provision of teaching and / or evaluation services provided through STA, as well as the evaluation of their provision. Each and every one of the Personal Data that the Holder enters or voluntarily provides to the person in charge, by any means, will be subject to the internal security and privacy policies.<br/><br/>
                        TRANSFER OF PERSONAL DATA<br/><br/>
                        STA may transfer your personal data to government agencies that officially require STA in order for it to provide information on the Holder, given that such information is in the possession of STA.<br/><br/>
                        STA at no time and under no circumstances will facilitate, sell, give away or rent any information about you to third parties, except as indicated above and in the cases established by the Ley de Datos. The Responsible Party undertakes not to transfer Personal Data, except for the provisions set forth in the Ley de Datos, its regulations, and other applicable legal regulations.<br/><br/>
                        ARCO RIGHTS<br/><br/>
                        For the exercise of the rights of access, rectification, cancellation, opposition and revocation of consent to the processing of Personal Data ("ARCO" rights) that the Holders have provided to the person in charge for the purposes of Spanish level evaluation services for candidates and / or any other services and / or courses that from time to time are taught in and / or through STA, the latter agrees that they may be enforced by the Holder either by himself or through a legal representative, and must be correctly identified or accredited, by calling the phone 55 33 05 51 78 with  Customer service hours Monday to Friday from 9:00 am to 18:00 pm clearly and precisely describing the Personal Data with respect to which it is sought to exercise any of the ARCO rights.<br/><br/>
                        In the call to exercise ARCO rights, you must provide an email address and / or telephone number to be able to communicate the response to your request or to be able to contact you in case you require additional information in relation to your request. Likewise, you must send us to the email contacto@spanish-ta.com a copy of your current official identification in order to prove your identity (voter ID, passport, military card, professional card or immigration form (FM-3 or the one in your case replaces the latter) and if applicable, if you act through a legal representative, you must additionally attach the documents that prove the identity and powers of representation of the latter (simple copy in printed or electronic format of the Simple power of attorney with autograph signature of the Holder, the agent or representative and their corresponding valid official identifications: voter ID, passport, military card, professional card or immigration form (FM-3 or the one that replaces the latter).<br/><br/>
                        In the case of requests for rectification of Personal Data, the respective Holder must also indicate the modifications to be made and provide the documentation that supports their request.<br/><br/>
                        The person responsible for the protection of Personal Data will respond to the respective Holder within a maximum period of 20 (twenty) business days, counted from the date on which the request for access, rectification, cancellation or opposition was received, the determination adopted, for the purpose of that, if appropriate, it becomes effective within 15 (fifteen) calendar days following the date on which the response is communicated to the Holder.<br/><br/>
                        CHANGES TO THE PRIVACY NOTICE<br/><br/>
                        Any substantial or total change made to this Privacy Notice may be made by STA by publishing a notice informing about the change on our page www.spanish-ta.com or by email to the address of the Holder that for such purposes is registered. It is your responsibility to review the updated content of the Privacy Notice available on the Internet page www.spanish-ta.com. STA assumes that, if the Holder does not oppose the changes, it means that he has read, understood and consented to the terms established therein. We recommend that you visit, from time to time, the STA website www.spanish-ta.com to find out about any changes to this Privacy Notice.<br/><br/>`,
                        icon: "info",
                        grow: "row",
                        confirmButtonText: "I agree",
                      }).then(() => setIsTermsAccepted(!isTermsAccepted));
                    }}
                  >
                    I accept the Comprehensive Privacy Notice for the Protection
                    of Personal Data.
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
                    style={{
                      margin: "15px 0",
                      color: "#008c7f",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      Swal.fire({
                        title: "Confidentiality agreement",
                        html: `By means of this agreement, THE CANDIDATE undertakes not to reveal or disclose in any way the information, material, evaluations of any kind, documentation, technical data, as well as the form of integral operation of the Spanish assessment service for candidates of SPANISH TRAINING ACADEMY SC and, in general, any mechanism or information that is considered confidential and that has been revealed in written or verbally form by SPANISH TRAINING ACADEMY S.C. to THE CANDIDATE.<br/><br/>
                        The obligation of confidentiality referred to in the previous paragraph will take effect from the contracting of its services for SPANISH TRAINING ACADEMY S.C. having permanent validity and retroactive effects until the moment in which all the negotiations aimed at the development of this relationship began.<br/><br/>
                        If there is any doubt as to whether any information is confidential or not, it must be treated as confidential, and therefore, it will be subject to the terms of this agreement.<br/><br/>
                        FIRST.- CONFIDENTIAL INFORMATION:<br/><br/>
                        "CONFIDENTIAL INFORMATION" shall be understood as: Any technical term, technical, financial, economic, accounting, business or any contractual file, as well as any data, document and information supplied by or obtained from SPANISH TRAINING ACADEMY S.C. as well as all documents, whether printed, in magnetic medium, electronic medium, or by any other known or unknown means, that allows knowledge related to the operation, in its broadest sense of the company and that due to its importance its disclosure without authorization by SPANISH TRAINING ACADEMY SC to THE CANDIDATE, represents or may represent an economic damage, or in the image or business of SPANISH TRAINING ACADEMY S.C. Whether the information is provided or obtained confidentially or not, because the set of technical data, information, documentation, formulas and operational form, is considered by both parties, as an industrial secret of SPANISH TRAINING ACADEMY SC, regardless of the means by which the information has been obtained.<br/><br/>
                        Access to "CONFIDENTIAL INFORMATION" will only be granted to those persons who, due to their rank, allow it, remaining under the responsibility of the "disseminating" and "receiving" official, the custody of said information, as well as the responsibility of providing it at their people in charge.<br/><br/>
                        The parties agree that once the information has been used by THE CANDIDATE, they will deliver it again to SPANISH TRAINING ACADEMY S.C. without preserving written, verbal, or other evidence of having received it, except with the express written consent to the contrary by SPANISH TRAINING ACADEMY S.C.<br/><br/>
                        Whenever the parties provide information, regardless of its nature, that is, if it is verbal, written, magnetic, electronic or any other known or to be known, it must be recorded, indicating date, time, and person or persons who had access to it; and if possible, having to return it in the terms of the previous paragraph.<br/><br/>
                        It is agreed that the INFORMATION in general will not be used by THE CANDIDATE for purposes other than those established in this Agreement.<br/><br/>
                        In the event that THE CANDIDATE, including its employees, advisors and partners, breach any of the stipulations of this agreement, he will pay SPANISH TRAINING ACADEMY S.C. the damages and losses that such breach causes, and such amount in no case will be less than $ 50,000.00 USD (FIFTY THOUSAND AMERICAN DOLLARS 00/100) or its equivalent in national currency.<br/><br/>
                        SECOND.- VALIDITY OF PROTECTION:<br/><br/>
                        The duration of protection referred to in this agreement will be permanent and from the first receipt of information, an obligation that will subsist for THE CANDIDATE. No modification or addition to this contract will take effect, unless it is in writing and duly signed by both parties.<br/><br/>
                        THIRD.- TERMINATION:<br/><br/>
                        This agreement will last as long as THE CANDIDATE and SPANISH TRAINING ACADEMY S.C. maintain a working and / or professional relationship. Upon termination of this agreement, each party must cease all use of the other party's Confidential Information, and return all copies and / or originals of the Confidential Information. Subsisting in any case, its obligation to keep the industrial secret and confidential information.<br/><br/>
                        FOURTH.- INFORMATION NOT SUBJECT TO CONFIDENTIALITY:<br/><br/>
                        The parties agree that Confidential Information does not mean information or data:<br/><br/>
                        a) That it subsequently becomes information in the public domain without the receiving party, its subsidiaries or affiliates having violated this contract.<br/><br/>
                        b) That it is INFORMATION whose disclosure is required by a competent administrative authority in the exercise of its functions or a judicial order from the competent courts.<br/><br/>
                        FIFTH.- This Confidentiality Agreement constitutes the total agreement between the parties, and cancels any previous contract or agreement between them with respect to the matters required herein.<br/><br/>`,
                        icon: "info",
                        grow: "row",
                        confirmButtonText: "I agree",
                      }).then(() => setIsPoliciesAccepted(!isPoliciesAccepted));
                    }}
                  >
                    I accept the Confidentiality Agreement
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
                      cPhone &&
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
            Before scheduling your evaluation, please wait 48 hours after
            completing your payment. Otherwise, your request will not be
            successfully registered. <br />
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
