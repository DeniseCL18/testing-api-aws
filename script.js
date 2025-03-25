document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://3.84.43.30/api-php-world/api/get_countries.php";
    const tableBody = document.getElementById("countryTableBody");
  
    if (!tableBody) {
      console.error("No se encontró el elemento con id 'countryTableBody'");
      return;
    }
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then(data => {
        // Verifica qué datos se están recibiendo
        console.log(data);
        
        // Verifica que la respuesta sea un arreglo
        if (!Array.isArray(data)) {
          console.error("La respuesta de la API no es un arreglo:", data);
          return;
        }
  
        data.forEach(country => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${country.code}</td>
            <td>${country.name}</td>
            <td>${country.continent}</td>
            <td>${country.region}</td>
            <td>${country.population ? country.population.toLocaleString() : "N/A"}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error);
      });
  });
  