import { Account, Client, ID } from "appwrite";
import conf from "../config/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.Login({ email, password });
        // call another Method
        // return userAccount
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Login({ email, password }) {
    try {
      return await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service::getCurrentUser", error);
    }
    return null;
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service:: logOut", error);
    }
  }
}
const authService = new AuthService();

export default authService;
