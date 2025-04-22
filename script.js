async function getData() {
  const response = await fetch('https://run.mocky.io/v3/13859a41-ff5a-48ca-8ae2-d6389056942b');
  const data = await response.json();
  return data;
}

async function renderChart() {
  const data = await getData();

  const chartOne = document.getElementById('myChartOne');

  new Chart(chartOne, {
    type: 'bar',
    data: {
      labels: [2020, 2021, 2022, 2023, 2024, 2025],
      datasets: [
        {
          label: 'Lionel Messi Goals',
          data: [
            data.goals.messi["2020"],
            data.goals.messi["2021"],
            data.goals.messi["2022"],
            data.goals.messi["2023"],
            data.goals.messi["2024"],
            data.goals.messi["2025"]
          ],
          backgroundColor: '#FED0EEB2'
        },
        {
          label: 'Cristiano Ronaldo Goals',
          data: [
            data.goals.ronaldo["2020"],
            data.goals.ronaldo["2021"],
            data.goals.ronaldo["2022"],
            data.goals.ronaldo["2023"],
            data.goals.ronaldo["2024"],
            data.goals.ronaldo["2025"]
          ],
          backgroundColor: '#D0E8FFB2'
        }
      ]
    },
    options: {
      
      indexAsis: 'y',
      responsive: false,
      maintainAspectRatio: false
    }
  });
}

renderChart(); // вызываем функцию
