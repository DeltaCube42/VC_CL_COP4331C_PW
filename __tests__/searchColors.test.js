const fetch = require("node-fetch");

describe("SearchColors API", () => {
  test("returns valid JSON with results array", async () => {
    const response = await fetch("https://YOUR_DOMAIN_HERE/LAMPAPI/SearchColors.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ search: "red", userId: 1 })
    });

    expect(response.status).toBe(200);

    const data = await response.json();

    expect(data).toHaveProperty("results");
    expect(Array.isArray(data.results)).toBe(true);
  });
});
