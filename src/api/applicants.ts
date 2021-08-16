import { httpFetch } from "../lib/helpers"

export const getApplicants = () => {
  try {
    const res = httpFetch('get', '/api/applicants/all');
    return res;
  } catch (err) {
    return err;
  }
};

export const saveApplicant = (data: any) => {
  try {
    const res = httpFetch('post', '/api/applicants/create', data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const searchApplicantByFolio = (folio: any) => {
  try {
    const res = httpFetch('get', `/api/applicants/folio/${folio}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const searchApplicantByEmail = (email: any) => {
  try {
    const res = httpFetch('get', `/api/applicants/email/${email}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const removeApplicant = (folio: any) => {
  try {
    const res = httpFetch('delete', `/api/applicants/delete/${folio}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};