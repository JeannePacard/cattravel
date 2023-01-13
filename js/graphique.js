/* premier */

let serie = {
  Kremlin: 65,
  "Eiffel Tower": 300,
};

const unContexte = document.getElementById("myChart").getContext("2d");

const unGraphique = new Chart(unContexte, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* deuxieme */

let serie2 = {
  "London Eye": 135,
  "Eiffel Tower": 300,
};

const unContexte2 = document.getElementById("myChart2").getContext("2d");

const unGraphique2 = new Chart(unContexte2, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie2,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* troisieme */
/* 
let serie3 = {
  "Manneken Pis": 0.5,
  "Eiffel Tower": 300,
};

const unContexte3 = document.getElementById("myChart3").getContext("2d");

const unGraphique3 = new Chart(unContexte3, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie3,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  
  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
}); */

/* quatre */

let serie4 = {
  "Mont Fuji": 3776,
  "Eiffel Tower": 300,
};

const unContexte4 = document.getElementById("myChart4").getContext("2d");

const unGraphique4 = new Chart(unContexte4, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie4,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* cinq */

let serie5 = {
  "N Seoul Tower": 236.7,
  "Eiffel Tower": 300,
};

const unContexte5 = document.getElementById("myChart5").getContext("2d");

const unGraphique5 = new Chart(unContexte5, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie5,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* six */

let serie6 = {
  Petra: 43,
  "Eiffel Tower": 300,
};

const unContexte6 = document.getElementById("myChart6").getContext("2d");

const unGraphique6 = new Chart(unContexte6, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie6,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* dix */

let serie10 = {
  Atonium: 102,
  "Eiffel Tower": 300,
};

const unContexte10 = document.getElementById("myChart10").getContext("2d");

const unGraphique10 = new Chart(unContexte10, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie10,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* onze */

let serie11 = {
  Corcovado: 38,
  "Eiffel Tower": 300,
};

const unContexte11 = document.getElementById("myChart11").getContext("2d");

const unGraphique11 = new Chart(unContexte11, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie11,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* douze */

let serie12 = {
  "Sydney Opera": 65,
  "Eiffel Tower": 300,
};

const unContexte12 = document.getElementById("myChart12").getContext("2d");

const unGraphique12 = new Chart(unContexte12, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie12,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* treize */

let serie13 = {
  "Belem Tower": 30,
  "Eiffel Tower": 300,
};

const unContexte13 = document.getElementById("myChart13").getContext("2d");

const unGraphique13 = new Chart(unContexte13, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie13,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* quatorze */

let serie14 = {
  "Giza's Pyramid 1": 147,
  "Giza's Pyramid 2": 143,
  "Giza's Pyramid 3": 65,
  "Eiffel Tower": 300,
};

const unContexte14 = document.getElementById("myChart14").getContext("2d");

const unGraphique14 = new Chart(unContexte14, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie14,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* quinze */

let serie15 = {
  "Pisa Tower": 56.7,
  "Eiffel Tower": 300,
};

const unContexte15 = document.getElementById("myChart15").getContext("2d");

const unGraphique15 = new Chart(unContexte15, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie15,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* seize */

let serie16 = {
  "Lady Liberty": 12,
  "Eiffel Tower": 300,
};

const unContexte16 = document.getElementById("myChart16").getContext("2d");

const unGraphique16 = new Chart(unContexte16, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie16,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* dixsept */

let serie17 = {
  "Eiffel Tower": 300,
  "Random man": 1.7,
};

const unContexte17 = document.getElementById("myChart17").getContext("2d");

const unGraphique17 = new Chart(unContexte17, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie17,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* dixhuigt */

let serie18 = {
  Colosseum: 48,
  "Eiffel Tower": 300,
};

const unContexte18 = document.getElementById("myChart18").getContext("2d");

const unGraphique18 = new Chart(unContexte18, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie18,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});

/* dixneuf */

let serie19 = {
  "Taj Mahal": 73,
  "Eiffel Tower": 300,
};

const unContexte19 = document.getElementById("myChart19").getContext("2d");

const unGraphique19 = new Chart(unContexte19, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Comparison with the size of the Eiffel Tower (meters)",
        data: serie19,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        text: "Comparison with the size of the Eiffel Tower (meters)",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  },
});
