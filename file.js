// Pateikę stringą, kurį sudaro tik raidės, parašykite funkciją, kuri gražina performatuotą stringą pagal pvz.

//pasižymiu elementus
let input = document.querySelector('#year')
let inputBtn = document.querySelector('#input')

const output = document.querySelector('.output');

const outputBTN = document.querySelector('#outputBtn');

//prisidedu event listiner ir jame apsirašau if sąlygas amžiui rasti
inputBtn.addEventListener('click', () => {
  const year = parseInt(input.value);

  if (year >= 1 && year <= 100) {
    output.textContent = 'Pirmasis amžius';
  } else if (year >= 101 && year <= 200) {
    output.textContent = 'Antras amžius';
  } else if (year >= 201 && year <= 300) {
    output.textContent = 'Trečias amžius';
  } 
  else if (year >= 301 && year <= 400) {
    output.textContent = 'Ketvirtas amžius';
  }
  else if (year >= 401 && year <= 500) {
    output.textContent = 'Penktas amžius';
  }
  else if (year >= 501 && year <= 600) {
    output.textContent = 'Šeštas amžius';
  }
  else if (year >= 601 && year <= 700) {
    output.textContent = 'Septintas amžius';
  }
  else if (year >= 701 && year <= 800) {
    output.textContent = 'Aštuntas amžius';
  }
  else if (year >= 801 && year <= 900) {
    output.textContent = 'Devintas amžius';
  }
  else if (year >= 901 && year <= 1000) {
    output.textContent = 'Dešimtas amžius';
  }
  else if (year >= 1001 && year <= 1100) {
    output.textContent = 'Vienuoliktas amžius';
  }
  else if (year >= 1101 && year <= 1200) {
    output.textContent = 'Dvyliktas amžius';
  }
  else if (year >= 1201 && year <= 1300) {
    output.textContent = 'Tryliktas amžius';
  }
  else if (year >= 1301 && year <= 1400) {
    output.textContent = 'Keturioliktas amžius';
  }
  else if (year >= 1401 && year <= 1500) {
    output.textContent = 'Penkioliktas amžius';
  }
  else if (year >= 1501 && year <= 1600) {
    output.textContent = 'Šešioliktas amžius';
  }
  else if (year >= 1601 && year <= 1700) {
    output.textContent = 'Septynioliktas amžius';
  }
  else if (year >= 1701 && year <= 1800) {
    output.textContent = 'Aštuonioliktas amžius';
  }
  else if (year >= 1801 && year <= 1900) {
    output.textContent = 'Devynioliktas amžius';
  }
  else if (year >= 1901 && year <= 2000) {
    output.textContent = 'Dvidešimtas amžius';
  }
  else if (year >= 2001 && year <= 2100) {
    output.textContent = 'Dvidešimt pirmas amžius';
  }else {
    output.textContent = 'Neturiu duomenų apie šį amžių';
  }

  input.style.display = 'none';
  inputBtn.style.display = 'none'
  output.style.display = 'block';
  outputBTN.classList.remove('d-none');
});

//kartojamas įvedimas
outputBTN.addEventListener('click', () => {
  input.style.display = 'block'
  inputBtn.style.display = 'block';
  output.style.display = 'none';
  outputBTN.classList.add('d-none');
});