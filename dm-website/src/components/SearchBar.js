import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchData from "../data/searchData";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = searchData.filter((page) => {
    const searchable =
      `${page.title} ${page.description} ${page.keywords}`.toLowerCase();

    return searchable.includes(query.toLowerCase());
  });

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      {query && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "white",
            border: "1px solid #ddd",
          }}
        >
          {results.length === 0 ? (
            <div style={{ padding: "10px" }}>No results</div>
          ) : (
            results.map((page) => (
              <div
                key={page.path}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
                onClick={() => {
                  navigate(page.path);
                  setQuery("");
                }}
              >
                <strong>{page.title}</strong>
                <br />
                <small>{page.description}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;