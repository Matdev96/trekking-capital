(function () {
  console.log('grafico.js v2 (gráfico de barras) carregado');
  const ctx = document.getElementById('gcSite');
  if (!ctx) return;

  Chart.register(ChartDataLabels);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Poupança',
        'CDB líq. IR',
        'Tesouro Selic',
        'Ibovespa*',
        ['Construção', 'de imóveis']
      ],
      datasets: [{
        data: [7.0, 12.2, 14.4, 13.0, 30.0],
        backgroundColor: ['#9aa3b0', '#9aa3b0', '#9aa3b0', '#9aa3b0', '#b3975d'],
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.55,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 36 } },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          anchor: 'end',
          align: 'end',
          formatter: (v) => v.toFixed(1).replace('.', ',') + '%',
          font: { weight: '800', size: 15, family: "'Montserrat', sans-serif" },
          color: '#152543',
          offset: 4,
        }
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            font: { size: 13, family: "'Montserrat', sans-serif", weight: '600' },
            color: '#152543',
          }
        },
        y: {
          display: false,
          min: 0,
          max: 40,
        }
      }
    }
  });
})();
