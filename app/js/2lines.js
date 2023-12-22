document.addEventListener("DOMContentLoaded", function () {
    const periodSelector = document.getElementById("periodSelector");
  
    periodSelector.addEventListener('change', function () {
      const selectedPeriod = periodSelector.value;
      loadData(selectedPeriod);
    });
  
    function loadData(period) {
      // Отримайте дані з сервера для обраного періоду
      // Ваш код для Ajax-запиту або генерації даних
      const newData = generateDataForPeriod(period);
  
      // Оновіть графік з новими даними
      lineChart.data.labels = newData.labels;
      lineChart.data.datasets[0].data = newData.previousMonthData;
      lineChart.data.datasets[1].data = newData.currentMonthData;
      lineChart.update();
    }
  
    // Функція для генерації даних (замість реального Ajax-запиту)
    function generateDataForPeriod(period) {
      // Ваш код для отримання даних з сервера або генерації
      // Здесь просто генеруємо випадкові дані для прикладу
      const labels = ["1765", "1785", "1797", "1824", "1835", "1854", "1900", "1950", "1999", "2050"];
      const previousMonthData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 300) + 100);
      const currentMonthData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 300) + 100);
  
      return { labels, previousMonthData, currentMonthData };
    }
  
    const lineChart = new Chart(
      document.getElementById("line-chart"),
      {
        type: 'line',
        data: {
          labels: ["1765", "1785", "1797", "1824", "1835", "1854", "1900", "1950", "1999", "2050"],
          datasets: [
            {
              data: [186, 205, 1321, 1516, 2107, 2191, 3133, 3221, 4783, 5478],
              label: "Previous month",
              borderColor: "#FF0000",
              fill: false
            },
            {
              data: [1282, 1350, 2411, 2502, 2635, 2809, 3947, 4402, 3700, 5267],
              label: "This month",
              borderColor: "#0099FF",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Chart JS Gridlines - Line Chart Example'
          },
          scales: {
            x: {
              grid: {
                display: true,
                color: "#666666",
                lineWidth: 2
              }
            },
            y: {
              grid: {
                display: true,
                color: "#666666"
              }
            }
          }
        }
      });
  });
  