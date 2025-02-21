const provinceCities = {
    "Foggia": { 
        cities: [
            { name: "Foggia", lat: 41.4617, lng: 15.5450 },
            { name: "San Giovanni Rotondo", lat: 41.7064, lng: 15.7277 },
            { name: "Manfredonia", lat: 41.6333, lng: 15.9166 },
            { name: "Lucera", lat: 41.5055, lng: 15.3391 },
            { name: "Cerignola", lat: 41.2666, lng: 15.9000 },
            { name: "San Severo", lat: 41.6833, lng: 15.3833 },
            { name: "Ortanova", lat: 41.3288, lng: 15.7099 },
            { name: "Torremaggiore", lat: 41.6912, lng: 15.2940 },
            { name: "San Nicandro Garganico", lat: 41.8349, lng: 15.5687 },
            { name: "Vieste", lat: 41.8821, lng: 16.1714 },
            { name: "Apricena", lat: 41.7862, lng: 15.4439 },
            { name: "San Marco In Lamis", lat: 41.7121, lng: 15.6382},
            { name: "Cagnano Varano", lat: 41.8283, lng: 15.7720 },
            { name: "Peschici", lat: 41.9452, lng: 16.0161 },
            { name: "Rignano Garganico", lat: 41.6793, lng: 15.5883},        
            { name: "Vico del Gargano", lat: 41.8950 ,lng: 15.9582 },
            { name: "Mattinata", lat: 41.7101,lng: 16.0515},
            { name: "Ascoli Satriano", lat: 41.2071,lng: 15.5624},
            { name: "Ischitella", lat: 41.9049,lng: 15.9002},
            { name: "Carpino", lat: 41.8431,lng: 15.8578},
            { name: "Rodi Garganico", lat: 41.9285,lng: 15.8842},
            { name: "Zapponeta", lat: 41.4581,lng: 15.9579},
            { name: "Poggio Imperiale", lat: 41.8261,lng: 15.3662},
            { name: "Sant'Agata di Puglia", lat: 41.1509,lng: 15.3801},
            { name: "Lesina", lat: 41.8627,lng: 15.3531},
            { name: "Troia", lat: 41.3611,lng: 15.3088}
        ]
    }
};

let map;
let marker;
const cityStops = {
    "Foggia": [
  { name: "Piazza Vittorio Veneto", lat: 41.465225, lng: 15.555756 },
  { name: "Foggia Aeroporto Gino Lisa", lat: 41.433907, lng: 15.544482 },
  { name: "Foggia Aeroporto (SP105)", lat: 41.434073, lng: 15.545393 },
  { name: "Via Umberto Garofalo", lat: 41.460912, lng: 15.549300 },
  { name: "Viale Michelangelo", lat: 41.456214, lng: 15.559519 },
  { name: "Via Napoli (Ospedale Civile)", lat: 41.454972, lng: 15.525877 },
  { name: "Via Manfredonia (sede Polizia Provinciale )", lat: 41.482478, lng: 15.560085},
  { name: "Via Montegrappa 40 (deposito SITA)", lan: 41.463445, lng: 15.556866},
],

"San Giovanni Rotondo": [
  { name: "Viale Cappuccini 101 ", lat: 41.7081, lng: 15.7093},
  { name: "Piazza Europa 29 ", lat: 41.7069, lng: 15.7245},
  { name: "Piazzale Forgione ", lat: 41.7079, lng: 15.7076},
  { name: "Viale Aldo Moro 161", lat: 41.7095, lng: 15.7100 },
  { name: "Viale Aldo Moro 136", lat: 41.7090, lng: 15.7090 },
  { name: "Viale Aldo Moro 5", lat: 41.7080, lng: 15.7050 },
  { name: "Via Foggia 255 (Hotel Mir)", lat: 41.7070, lng: 15.7020 },
  { name: "Corso Roma 140 ", lat: 41.7026, lng: 15.7269},
  { name: "Corso Roma 124 ", lat: 41.7035, lng: 15.7258},
  { name: "Corso Roma 92 ", lat: 41.7051, lng: 15.7255},
  { name: "Piazza Europa 8 ", lat: 41.7073, lng: 15.7243},
  { name: "Corso Matteotti 20 ", lat: 41.7071, lng: 15.7294},
  { name: "Corso Matteotti 20 ", lat: 41.7071, lng: 15.7294},
  { name: "Corso Roma 166 ", lat: 41.7016, lng: 15.7298}
],

"Manfredonia": [
  { name: "Piazza Cavour", lat: 41.6340, lng: 15.9155 },
  { name: "Via Napoli", lat: 41.6330, lng: 15.9170 },
  { name: "PIAZZA DELLA LIBERTA'", lat: 41.623195, lng: 15.907353 },
  { name: "VIA TRIBUNA 16", lat: 41.628407, lng: 15.914610 },
  { name: "Via della Transumanza", lat: 41.635239, lng: 15.900518 },
  { name: "Via Gargano", lat: 41.636910, lng: 15.925743 },
  { name: "Piazza Marconi", lat: 41.626514, lng: 15.913463 },
  { name: "Via Scaloria", lat: 41.635505, lng: 15.911222 },
],

"Lucera": [
    { name: "Piazza Libertà", lat: 41.262852, lng: 15.898112},
    { name: "Via Gen. dalla Chiesa", lat: 41.262600, lng: 15.912643},
    { name: "Via Puglie 8", lat: 41.262103, lng: 15.903314}
],

"San Marco In Lamis": [
  { name: "Via S. Nicandro", lat: 41.715264, lng: 15.635379 },
  { name: "Piazza Europa", lat: 41.711428, lng: 15.634779 },
  { name: "Via Gian Battista Vico", lat: 41.712041, lng: 15.640573 },
],
"San Nicandro Garganico": [
  { name: "Via Guglielmo Marconi", lat: 41.832674, lng: 15.566312 },
  { name: "Piazza Falcone e Borsellino", lat: 41.841059, lng: 15.565508},
  { name: "Via Gargano 50", lat: 41.834189, lng: 15.571121 },
  { name: "Via Gramsci 128", lat: 41.836275, lng: 15.567666 },
  { name: "Via Gramsci 78", lat: 41.835184, lng: 15.569097 }
],

"Monte Sant'Angelo": [
    { name: "Piazza Duca D'Aosta", lat: 41.706516, lng: 15.960002   },
    { name: "Via della Repubblica", lat: 41.707059, lng: 15.949088}
],

"Cerignola": [
    { name: "Viale dei Mandorli", lat: 41.260295, lng: 15.908279 },
    { name: "Piazza Libertà", lat: 41.262852, lng: 15.898112},
    { name: "Via Gen. dalla Chiesa", lat: 41.262600, lng: 15.912643},
    { name: "Via Puglie 8", lat: 41.262103, lng: 15.903314}
],



"Rignano Garganico": [
    { name: "Largo Portagrande", lat: 41.675714, lng: 15.586341 },
    { name: "Via Nazionale 28", lat: 41.677181, lng: 15.587623},
    { name: "Via da Vinci 71", lat: 41.679004, lng: 15.589785}
],

"San Severo": [
    { name: "Viale dei Mandorli", lat: 41.260295, lng: 15.908279 },
    { name: "Piazza Libertà", lat: 41.262852, lng: 15.898112},
    { name: "Via Gen. dalla Chiesa", lat: 41.262600, lng: 15.912643},
    { name: "Via Puglie 8", lat: 41.262103, lng: 15.903314}
]
};
function initMap() {
    map = L.map('map').setView([41.7064, 15.7277], 10); // Posizione iniziale su San Giovanni Rotondo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    marker = L.marker([41.7064, 15.7277]).addTo(map); // Marker iniziale su San Giovanni Rotondo
}

function updateCities() {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("cities");
    const selectedProvince = provinceSelect.value;

    citySelect.innerHTML = "<option value=''>Seleziona una città</option>";

    if (selectedProvince) {
        const citiesData = provinceCities[selectedProvince];
        citiesData.cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city.name;
            option.textContent = city.name;
            citySelect.appendChild(option);
        });
    }
}
function updateStops() {
    
  const citySelect = document.getElementById("cities");
  const stopsSelect = document.getElementById("stops");
  const selectedCity = citySelect.value;
  stopsSelect.innerHTML = "<option value=''>Seleziona una fermata</option>";
  if (selectedCity && cityStops[selectedCity]) {
  
      cityStops[selectedCity].forEach(stop => {

          const option = document.createElement("option");
          option.value = stop.name;
          option.textContent = stop.name;
          option.setAttribute("data-lat", stop.lat);
          option.setAttribute("data-lng", stop.lng);
          stopsSelect.appendChild(option);
      });
  }
}

function updateMap() {

  const citySelect = document.getElementById("cities");
  const stopSelect = document.getElementById("stops");
  const selectedCity = citySelect.value;
  const selectedStop = stopSelect.value;    

  if (selectedCity &&  selectedStop) {
      const citiesData = provinceCities["Foggia"];
      const selectedCityData = citiesData.cities.find(city => city.name === selectedCity);
      const stopsData = cityStops[selectedCityData.name].find(stop => stop.name === selectedStop );

      if (stopsData) {
          map.setView([stopsData.lat, stopsData.lng], 18);  // Aggiorna il centro sulla città selezionata
          marker.setLatLng([stopsData.lat, stopsData.lng]);  // Posiziona il marker sulla città selezionata
          marker.bindPopup("Comune di " + selectedCity).openPopup();
      }
  }
  // Aggiorna le fermate quando la città viene cambiata
  //updateStops();
}

function confirmSelection() {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("cities");
    const selectedProvince = provinceSelect.value;
    const selectedCity = citySelect.value;

    if (selectedCity && selectedProvince) {
        const citiesData = provinceCities[selectedProvince];
        const selectedCityData = citiesData.cities.find(city => city.name === selectedCity);

        if (selectedCityData) {
            map.setView([selectedCityData.lat, selectedCityData.lng], 12); // Vista centrata sulla città
            marker.setLatLng([selectedCityData.lat, selectedCityData.lng]); // Spostamento marker
            marker.bindPopup("Comune di " + selectedCity).openPopup();
            alert("Mappa aggiornata sulla città di " + selectedCity + " in provincia di " + selectedProvince);
        }
    } else {
        alert("Seleziona prima una provincia e una città.");
    }
}

function toggleStops() {
    const stopContainer = document.getElementById("stop-container");
    stopContainer.style.display = stopContainer.style.display === 'block' ? 'none' : 'block';
}

function goHome() {
    window.location.href = "../homePage/homePage.html"; 
}
/*
function openNav() {
    // Aggiorna la sidebar con i dati selezionati
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("cities");
    const stopSelect = document.getElementById("stops");
    const provaSelect = document.getElementById("prova");

    const selectedProvince = provinceSelect.value;
    const selectedCity = citySelect.value;
    const selectedStop = stopSelect.options[stopSelect.selectedIndex].text;
    const selectedProva = provaSelect.value;
    console.log(selectedProva);

    document.getElementById("selectedProvince").textContent = selectedProvince;
    document.getElementById("selectedCity").textContent = selectedCity;
    document.getElementById("selectedStop").textContent = selectedStop;
    document.getElementById("selectedProva").textContent = selectedProva;

    // Apre la sidebar
    document.getElementById("sidebar").style.width = "320px";//Aumenta la dimensione della sidebar
}*/
function openNav() {
    document.getElementById("sidebar").style.width = "340px"; // Aumenta la dimensione della sidebar
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

