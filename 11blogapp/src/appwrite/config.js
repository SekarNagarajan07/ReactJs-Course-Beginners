import conf from "../conf/conf.js";

import { Client, Databases, Query } from "appwrite";
export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Bucket(this.client)
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
      console.log("Appwrite error: ", error);
      return false
    }
  }

  async getPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);
    } catch (error) {
      console.log("Appwrite error: ", error);
      return false
    }
  }
  async createPost({ title, slug, content, feacturedImage, status, userId }) {
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
        title, content, feacturedImage, status, userId
      })
    } catch (error) {
      console.log("Application Error" + error);
      return false
    }
  }
}

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('5df5acd0d48c2'); // Your project ID

const databases = new Databases(client);