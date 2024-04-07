import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6568773fbec8155df8e5");

export const account = new Account(client);
export const databases = new Databases(client);
