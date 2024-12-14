import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  platform: "com.dfranzzzzz.snapgram",
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
};

export const client = new Client();

const { endpoint, projectId } = appwriteConfig;

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId); // Your project ID

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
