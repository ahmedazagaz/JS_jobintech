let products = [];

// Lire le fichier JSON local
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    populateCategoryFilter();
    renderProducts(products);
    updateTotalPrice(products);
    renderChart(products);
  });

// Filtrer par catégorie
document.getElementById('categoryFilter').addEventListener('change', () => {
  filterSortSearch();
});

// Trier
document.getElementById('sortSelect').addEventListener('change', () => {
  filterSortSearch();
});

// Recherche
document.getElementById('searchInput').addEventListener('input', () => {
  filterSortSearch();
});

function filterSortSearch() {
  const category = document.getElementById('categoryFilter').value;
  const sortBy = document.getElementById('sortSelect').value;
  const search = document.getElementById('searchInput').value.toLowerCase();

  let filtered = products;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
  }

  filtered.sort((a, b) => a[sortBy] - b[sortBy]);

  renderProducts(filtered);
  updateTotalPrice(filtered);
  renderChart(filtered);
}

// Remplir le select des catégories
function populateCategoryFilter() {
  const categories = [...new Set(products.map(p => p.category))];
  const select = document.getElementById('categoryFilter');
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

// Afficher les produits dans le tableau
function renderProducts(list) {
  const tbody = document.querySelector('#productTable tbody');
  tbody.innerHTML = '';

  list.forEach(p => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${p.name}</td><td>${p.price}DH</td><td>${p.category}</td><td>${p.stock}</td>`;
    tbody.appendChild(row);
  });
}

// Calculer le prix total
function updateTotalPrice(list) {
  const total = list.reduce((sum, p) => sum + p.price, 0);
  document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Afficher le graphique
function renderChart(list) {
  const categories = [...new Set(list.map(p => p.category))];
  const stockData = categories.map(cat => {
    return list.filter(p => p.category === cat).reduce((sum, p) => sum + p.stock, 0);
  });

  const ctx = document.getElementById('stockChart').getContext('2d');
  
  if (window.myChart) window.myChart.destroy(); // détruire ancien graphique
  
  window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: [{
        label: 'Stock total',
        data: stockData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      }]
    },
    options: {
      responsive: true
    }
  });
}
