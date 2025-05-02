import axios from "axios";

export type ClusterNode = {
  id: string;
  address: string;
  flags: string[];
  role: "master" | "slave";
  masterId: string;
  pingSent: number;
  pongRecv: number;
  configEpoch: number;
  linkState: "connected" | string;
  slots?: string[];
};

export type ClusterInfo = {
  count: number;
  nodes: ClusterNode[];
};

export async function memClusterNode(): Promise<ClusterInfo> {
  const response = await axios.get("/mem/cluster/node");
  if (response.status !== 200) {
    throw new Error("Failed to fetch cluster node information");
  }
  return response.data;
}
