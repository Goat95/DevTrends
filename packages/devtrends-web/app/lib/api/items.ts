import { client } from "../client";
import { type GetItemsResult, type Item } from "./types";

export async function createItem(params: CreateItemParams) {
  const response = await client.post<Item>("/api/items", params);
  return response.data;
}

export async function getItems() {
  const response = await client.get<GetItemsResult>("/api/item");
  return response.data;
}

interface CreateItemParams {
  link: string;
  title: string;
  body: string;
}
