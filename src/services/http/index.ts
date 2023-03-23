/* eslint-disable prefer-destructuring */
import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
	baseURL: `https://641c68421a68dc9e4608d929.mockapi.io/api`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export { http };