import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { getApplicants } from "../redux/modules/applicants";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Dialog from "../components/Dialog";
import Remove from "../components/Remove";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 50px;
`;

const Admin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApplicants());
  }, [dispatch]);
  const applicants = useSelector((state: any) => state.applicants.applicants);
  const columns = [
    {
      name: "Nombre",
      selector: "name",
      sortable: true,
    },
    {
      name: "Apellido",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Vacancy",
      selector: "vacancy",
      sortable: true,
    },
    {
      name: "Age",
      selector: "age",
      sortable: true,
    },
    {
      name: "More info",
      button: true,
      cell: (row: any) => <Dialog data={row} />,
    },
    {
      name: "Eliminar",
      button: true,
      cell: (row: any) => <Remove data={row} />,
    },
  ];

  return (
    <Wrapper>
      <DataTable
        actions={
          <>
            <Button
              colorScheme="red"
              onClick={() => {
                sessionStorage.removeItem("isAuth");
                history.push("/");
              }}
            >
              Cerrar Sesión
            </Button>
          </>
        }
        title="Applicants list"
        columns={columns}
        data={applicants}
      />
    </Wrapper>
  );
};

export default Admin;
