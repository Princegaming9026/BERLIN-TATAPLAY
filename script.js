// List of countries and their time zones
const countries = [
  { code: "US", name: "United States", timezone: "America/New_York" },
  { code: "IN", name: "India", timezone: "Asia/Kolkata" },
  { code: "JP", name: "Japan", timezone: "Asia/Tokyo" },
  { code: "GB", name: "United Kingdom", timezone: "Europe/London" },
  { code: "DE", name: "Germany", timezone: "Europe/Berlin" },
  { code: "AU", name: "Australia", timezone: "Australia/Sydney" },
];

// Function to fetch and display time
async function fetchTime(country) {
  try {
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${country.timezone}`);
    const data = await response.json();
    const time = new Date(data.datetime).toLocaleTimeString();
    return time;
  } catch (error) {
    console.error("Error fetching time:", error);
    return "N/A";
  }
}

// Function to display countries with flags and time
async function displayCountries() {
  const container = document.getElementById("countries");
  container.innerHTML = ""; // Clear previous content

  for (const country of countries) {
    const time = await fetchTime(country);
    const flagUrl = `https://flagcdn.com/${country.code.toLowerCase()}.svg`;

    const countryDiv = document.createElement("div");
    countryDiv.className = "country";

    countryDiv.innerHTML = `
      <img src="${flagUrl}" alt="${country.name} Flag" class="flag">
      <span class="name">${country.name}</span>
      <span class="time">${time}</span>
    `;

    container.appendChild(countryDiv);
  }
}

// Update time every second
setInterval(displayCountries, 1000);

// Initial display
displayCountries();
