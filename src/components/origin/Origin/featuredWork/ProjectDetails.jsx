import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) {
      setVehicles([]);
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `/api/vehicles/${encodeURIComponent(search.trim())}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("data not received");
        }

        const data = await response.json();

        setVehicles(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && <p>Searching...</p>}

        {vehicles.map((vehicle) => (
          <p key={vehicle.id}>{vehicle.registrationNumber}</p>
        ))}
      </div>
    </>
  );
};
