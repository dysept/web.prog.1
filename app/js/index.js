document.addEventListener("DOMContentLoaded", function () {
    // Получаем элемент селектора и canvas
    const periodSelector = document.getElementById("periodSelector");
    const canvas = document.getElementById('linechart');
    const ctx = canvas.getContext('2d');
  
    // Функция для загрузки данных с сервера
    async function loadData(period) {
      // Здесь вы можете сделать Ajax-запрос для получения данных с сервера
      // В этом примере, просто обновим данные для графика случайными значениями
  
      const newDataJson = await fetch('/app/data/data.json');
      const newDataByPeriod = await newDataJson.json()
      const newData = newDataByPeriod[period];
      console.log(period, newDataByPeriod)

      // Обновляем данные в графике
      linechart.data.labels = newData.labels;
      linechart.data.datasets[0].data = newData.data;
      linechart.update();
    }
  
    // Функция для генерации случайных данных (замените на свой Ajax-запрос)
    function generateRandomData(period) {
      // Ваш код для получения данных с сервера
      // Здесь просто генерируем случайные данные для примера
      const labels = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""];
      const data = Array.from({ length: 14 }, () => Math.floor(Math.random() * 300) + 100);
  
      return { labels, data };
    }
  
    // Обработчик изменения выбранного периода
    periodSelector.addEventListener("change", function () {
      const selectedPeriod = periodSelector.value;
      loadData(selectedPeriod);
    });
  
    // Пример графика (оставьте свой код графика здесь)
    const linechart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
        datasets: [{
          data: [210, 150, 130, 160, 220, 250, 240, 210, 170, 150, 145, 165, 220, 300],
          fill: true,
          cubicInterpolationMode: 'monotone',
          pointStyle: false,
          tension: 0.8,
        }]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
              color: 'black',
              borderColor: 'black',
            },
            ticks: {
              backdropPadding: 10
            }
          },
          y: {
            min: 0,
            max: 500,
            ticks: {
              stepSize: 100,
              backdropPadding: 20
            },
            grid: {
              padding: 50,
              color: '#fffff',
              borderWidth: 0,
              borderDash: [10]
            }
          },
        },
        plugins: {
          legend: false,
        },
        layout: {
          padding: 15
        }
      },
    });
  
    // Загрузка данных для выбранного периода при запуске
    const initialPeriod = periodSelector.value;
    loadData(initialPeriod);
  });
  