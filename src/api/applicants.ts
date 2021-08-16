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
    console.log(err)
  }
};

export const searchApplicant = (folio: any) => {
  try {
    const res = httpFetch('get', '/api/applicants/find', null, folio);
    return res;
  } catch (err) {
    console.log(err)
  }
}