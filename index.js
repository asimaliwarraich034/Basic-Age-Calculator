const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const { years, months, days } = getAge(birthdayValue);
    let ageString = "";
    if (years > 0) {
      ageString += `${years} ${years > 1 ? "years" : "year"}`;
    }
    if (months > 0) {
      ageString += `, ${months} ${months > 1 ? "months" : "month"}`;
    }
    if (days > 0) {
      ageString += `, ${days} ${days > 1 ? "days" : "day"}`;
    }
    resultEl.innerText = `Your age is ${ageString} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();
  let days = currentDate.getDate() - birthdayDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months = 12 + months; // Adjust months to be positive
  }

  if (days < 0) {
    const tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days = tempDate.getDate() + days; // Add negative days to the days of previous month
    months--;
  }

  return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
