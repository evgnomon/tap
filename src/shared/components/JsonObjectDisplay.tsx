interface JsonObjectDisplayProps {
  data: Record<string, unknown>;
}

const JsonObjectDisplay: React.FC<JsonObjectDisplayProps> = ({ data }) => {
  return (
    <div className="bg-gray-80 rounded-lg shadow-sm mx-auto border border-gray-200 mb-2 px-2">
      <table className="w-full table-fixed border-collapse">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr
              key={key}
              className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 retro:hover:bg-opacity-50"
            >
              <td className="w-[200px] max-w-[200px] truncate py-1 px-4 font-medium capitalize">
                {key}
              </td>
              <td className="py-1 px-4 overflow-auto">
                {Array.isArray(value)
                  ? `[${value.join(", ")}]`
                  : value === null || value === undefined
                    ? "N/A"
                    : typeof value === "object"
                      ? JSON.stringify(value)
                      : String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonObjectDisplay;
