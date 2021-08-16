import { toast } from 'react-toastify';
import * as applicantsAPI from '../../api/applicants';

const GET_ALL_APPLICANTS = "applicants/GET_ALL_APPLICANTS";
const SEARCH_APPLICANT = 'applicants/SEARCH_APPLICANT';

const INITIAL_STATE = {
  applicants: [],
  applicant: null,
};

export default function applicants(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case GET_ALL_APPLICANTS:
      return { ...state, applicants: action.payload };
    case SEARCH_APPLICANT:
      return { ...state, applicant: action.payload };
    default:
      return state;
  }
};

export const getApplicants = () => async (dispatch: any) => {
  try {
    const res = await applicantsAPI.getApplicants();
    dispatch({
      type: GET_ALL_APPLICANTS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err);
  }
};

export const saveApplicant = (data: any) => async () => {
  try {
    await applicantsAPI.saveApplicant(data);
  } catch (err) {
    console.log(err);
  }
};

export const searchApplicantByFolio = (folio: any) => async (dispatch: any) => {
  try {
    const res = await applicantsAPI.searchApplicantByFolio(folio);
    dispatch({
      type: SEARCH_APPLICANT,
      payload: res.data,
    })
  } catch (err) {
    console.log(err);
  }
};

export const searchApplicantByEmail = (email: any) => async (dispatch: any) => {
  try {
    const res = await applicantsAPI.searchApplicantByEmail(email);
    dispatch({
      type: SEARCH_APPLICANT,
      payload: res.data,
    })
  } catch (err) {
    console.log(err);
  }
};

export const removeApplicant = (folio: any) => async (dispatch: any) => {
  try {
    const res = await applicantsAPI.removeApplicant(folio);
    toast.success(res.data.message);
    dispatch(getApplicants());
  } catch (err) {
    console.log(err);
  }
}