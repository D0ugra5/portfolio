import { useQuery } from "react-query";
import { api } from "../api";

async function getComplaits() {
  const { data } = await api.get("/");
  return data;
}

export function useComplait() {
  return useQuery("complaits", getComplaits);
}
