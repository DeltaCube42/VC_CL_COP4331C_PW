const fetch = require("node-fetch");

describe("SearchColors API", () => {
  test("returns valid JSON with results array", async () => {
    const response = await fetch("https://betinsky-colorslab.com/LAMPAPI/SearchColors.php", { // The link used here is Adam's. My droplet was shut down and deleted awhile back. I'm not remaking all that and paying just for one assignment.
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
