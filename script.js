fetch("data/articles.json")
  .then(response => response.json())
  .then(data => {

    const table = document.getElementById("article-table");

    data.forEach(article => {

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${article.Index}</td>
        <td>${article.date}</td>
        <td>${article.title}</td>
        <td><a href="${article.link}" target="_blank">Read</a></td>
      `;

      table.appendChild(row);

    });

  });
