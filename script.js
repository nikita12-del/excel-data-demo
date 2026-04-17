fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRpc4H0TN40P_UMrs-0DUaxXx4joitx5dylz5aB6V1fRSCBDySQbgBuyztbllxkfFNfMwkE6dXkkN34/pub?output=csv")
  .then(res => res.text())
  .then(csvText => {
    let parsed = Papa.parse(csvText, { header: false });
    parsedData = parsed.data;
    document.getElementById("loading").style.display = "none"; // hide loading
    renderTable(parsedData);
  })
  .catch(err => {
    document.getElementById("loading").textContent = "Error loading data!";
    console.error("Fetch error:", err);
  });
