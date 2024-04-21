const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    color: "hsl(28, 10%, 53%)",
    datasets: [
      {
        label: "",
        data: [7, 12, 19, 11, 8, 14, 10],
        backgroundColor: [
          " hsl(10, 79%, 65%)",
          " hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          " hsl(10, 79%, 65%)",
          " hsl(10, 79%, 65%)",
          " hsl(10, 79%, 65%)",
        ],
        borderWidth: 0,
        borderRadius: 5,
        hidden: true,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    legend: {
      display: false,
    },
  },
});
