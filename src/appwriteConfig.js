import { Client,Account } from 'appwrite';
const client = new Client();
client.setProject('679a8c850028dbc030c3');

export const account = new Account(client);