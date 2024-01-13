import { useState, useEffect, useCallback } from "react";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<{ success: boolean }>();

  const fetchQuery = useCallback(async () => {
    const response = await fetch(
      `http://${
        import.meta.env.VITE_API_HOST
          ? import.meta.env.VITE_API_HOST
          : "localhost"
      }:3001`
    );
    const data = await response.json();
    setQuery(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchQuery();
  }, [fetchQuery]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#dd3",
        }}
      >
        <span style={{ marginRight: ".5rem" }}>
          Postgres connection status:
        </span>
        {!loading ? (
          <>
            {query?.success ? (
              <span style={{ color: "#2e7" }}>Success</span>
            ) : (
              <span style={{ color: "#d22" }}>Failure</span>
            )}
          </>
        ) : (
          <span style={{ color: "white" }}>Loading...</span>
        )}
      </div>
    </>
  );
}

export default App;
