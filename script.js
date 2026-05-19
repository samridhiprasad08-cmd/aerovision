// script.js

// ===============================
// RANDOM VALUE GENERATOR
// ===============================

function random(min, max){
  return (Math.random() * (max - min) + min).toFixed(1);
}


// ===============================
// LIVE TELEMETRY UPDATES
// ===============================

function updateTelemetry(){

  // ENGINE CORE

  document.getElementById("rpm").innerText =
    random(78, 96) + "%";

  document.getElementById("egt").innerText =
    random(650, 890) + "°C";

  document.getElementById("cpr").innerText =
    random(28, 40);

  document.getElementById("thrust").innerText =
    random(75, 110) + " kN";


  // STRUCTURAL HEALTH

  document.getElementById("fatigue").innerText =
    random(8, 22) + "%";

  document.getElementById("hydraulic").innerText =
    random(2800, 3400) + " psi";


  // VIBRATION STATUS

  const vibrationLevels = [
    "STABLE",
    "NORMAL",
    "LOW OSCILLATION",
    "MONITORING"
  ];

  const randomVibration =
    vibrationLevels[
      Math.floor(Math.random() * vibrationLevels.length)
    ];

  document.getElementById("vibration").innerText =
    randomVibration;

}


// UPDATE EVERY 2.5 SECONDS

setInterval(updateTelemetry, 2500);


// ===============================
// ALTITUDE TELEMETRY CHART
// ===============================

const altitudeCtx =
  document.getElementById("altitudeChart");

const altitudeChart = new Chart(altitudeCtx, {

  type: "line",

  data: {

    labels: [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7"
    ],

    datasets: [{

      label: "Altitude (ft)",

      data: [
        32000,
        33800,
        34500,
        35200,
        34800,
        36000,
        35500
      ],

      borderColor: "#00e5ff",

      backgroundColor:
        "rgba(0,229,255,0.08)",

      fill: true,

      tension: 0.4,

      borderWidth: 2,

      pointRadius: 3,

      pointBackgroundColor: "#00e5ff"

    }]

  },

  options: {

    responsive: true,

    plugins: {

      legend: {

        labels: {
          color: "#c8f7ff"
        }

      }

    },

    scales: {

      x: {

        ticks: {
          color: "#89dfff"
        },

        grid: {
          color: "rgba(255,255,255,0.05)"
        }

      },

      y: {

        ticks: {
          color: "#89dfff"
        },

        grid: {
          color: "rgba(255,255,255,0.05)"
        }

      }

    }

  }

});


// ===============================
// ENGINE HEALTH ANALYTICS
// ===============================

const engineCtx =
  document.getElementById("engineChart");

const engineChart = new Chart(engineCtx, {

  type: "bar",

  data: {

    labels: [
      "Compressor",
      "Combustor",
      "Turbine",
      "Hydraulics",
      "Fuel Sys"
    ],

    datasets: [{

      label: "Health Index",

      data: [
        96,
        89,
        92,
        94,
        90
      ],

      backgroundColor: [

        "rgba(0,229,255,0.7)",
        "rgba(0,255,157,0.7)",
        "rgba(255,174,0,0.7)",
        "rgba(0,229,255,0.7)",
        "rgba(255,59,59,0.7)"

      ],

      borderWidth: 1

    }]

  },

  options: {

    responsive: true,

    plugins: {

      legend: {

        labels: {
          color: "#c8f7ff"
        }

      }

    },

    scales: {

      x: {

        ticks: {
          color: "#89dfff"
        },

        grid: {
          color: "rgba(255,255,255,0.04)"
        }

      },

      y: {

        beginAtZero: true,

        max: 100,

        ticks: {
          color: "#89dfff"
        },

        grid: {
          color: "rgba(255,255,255,0.04)"
        }

      }

    }

  }

});


// ===============================
// LIVE CHART UPDATES
// ===============================

function updateCharts(){

  // ALTITUDE CHART UPDATE

  altitudeChart.data.datasets[0].data.shift();

  altitudeChart.data.datasets[0].data.push(
    Math.floor(random(33000, 37000))
  );

  altitudeChart.update();


  // ENGINE HEALTH UPDATE

  engineChart.data.datasets[0].data = [

    Math.floor(random(85, 100)),
    Math.floor(random(82, 98)),
    Math.floor(random(80, 97)),
    Math.floor(random(88, 100)),
    Math.floor(random(78, 95))

  ];

  engineChart.update();

}


// UPDATE CHARTS EVERY 4 SECONDS

setInterval(updateCharts, 4000);


// ===============================
// RANDOM ALERT SYSTEM
// ===============================

const alerts = [

  "ENGINE CORE TEMP RISE",
  "TURBINE VIBRATION DETECTED",
  "HIGH ALTITUDE TURBULENCE",
  "HYDRAULIC PRESSURE FLUCTUATION",
  "FADEC RESPONSE DELAY",
  "THERMAL IMBALANCE DETECTED"

];

function randomAlert(){

  const dangerAlert =
    document.querySelector(".danger");

  const randomIndex =
    Math.floor(Math.random() * alerts.length);

  dangerAlert.innerText =
    alerts[randomIndex];

}


// UPDATE ALERTS EVERY 6 SECONDS

setInterval(randomAlert, 6000);


// ===============================
// CONSOLE BOOT MESSAGE
// ===============================

console.log(`
========================================
AEROVISION NX INITIALIZED
AIRCRAFT SYSTEM MONITOR ACTIVE
GE AEROSPACE INSPIRED UI LOADED
========================================
`);