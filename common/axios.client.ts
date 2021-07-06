import axios, { AxiosInstance } from 'axios';
import { BASEURL } from './common.constants';

export const instance: AxiosInstance = axios.create({
  baseURL: BASEURL,
});
