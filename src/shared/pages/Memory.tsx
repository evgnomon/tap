import JsonObjectDisplay from "@shared/components/JsonObjectDisplay";
import { useEffect, useState } from "react";
import { ClusterInfo, memClusterNode } from "@shared/remote/MemAPI";
import FullGrid from "@shared/components/FullGrid";

function MemoryClusterNodes() {
  const [data, setData] = useState<ClusterInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await memClusterNode());
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div></div>;
  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Error: {error.message}</div>
      </div>
    );

  return (
    <FullGrid>
      {data &&
        data.nodes.map((item) => (
          <JsonObjectDisplay key={item.id} data={item} />
        ))}
    </FullGrid>
  );
}

const MemoryPage = () => {
  return (
    <div className="font-inter" dir="ltr">
      <MemoryClusterNodes />
    </div>
  );
};

export default MemoryPage;
