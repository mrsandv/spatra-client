import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { getApplicants } from "../redux/modules/applicants";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "../components/Dialog";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 50px;
`;

const Admin = () => {
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
      cell: (row) => <Dialog data={row} />,
    },
  ];

  return (
    <Wrapper>
      <DataTable title="Applicants list" columns={columns} data={applicants} />
    </Wrapper>
  );
};

export default Admin;
