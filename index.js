const USD = 26.25;
const EUR = 30.3;
const RUB = 0.355;
const PLN = 6.47;
const GBP = 35.4;
const currency = ["USD", "EUR", "RUB", "PLN", "GBP"];
let currentСurrency, conversionAmount, newСurrency, factor, result, again;

currentСurrency = prompt(`Name of currency you want to convert(${currency}): `);

conversionAmount = prompt("Enter the amount to convert: ");

newСurrency = prompt(`Name of currency to convert(${currency}): `);

if (newСurrency.toUpperCase() === currentСurrency.toUpperCase()) {
  factor = 1;
  result = conversionAmount * factor;
  alert(result);
}
// USD
else if (
  currentСurrency.toUpperCase() === "USD" &&
  newСurrency.toUpperCase() === "EUR"
) {
  factor = USD / EUR;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "USD" &&
  newСurrency.toUpperCase() === "RUB"
) {
  factor = USD / RUB;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "USD" &&
  newСurrency.toUpperCase() === "PLN"
) {
  factor = USD / PLN;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "USD" &&
  newСurrency.toUpperCase() === "GBP"
) {
  factor = USD / GBP;
  result = conversionAmount * factor;
  alert(result);
}

// EUR
else if (
  currentСurrency.toUpperCase() === "EUR" &&
  newСurrency.toUpperCase() === "USD"
) {
  factor = EUR / USD;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "EUR" &&
  newСurrency.toUpperCase() === "RUB"
) {
  factor = EUR / RUB;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "EUR" &&
  newСurrency.toUpperCase() === "PLN"
) {
  factor = EUR / PLN;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "EUR" &&
  newСurrency.toUpperCase() === "GBP"
) {
  factor = EUR / GBP;
  result = conversionAmount * factor;
  alert(result);
}

// RUB
else if (
  currentСurrency.toUpperCase() === "RUB" &&
  newСurrency.toUpperCase() === "USD"
) {
  factor = RUB / USD;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "RUB" &&
  newСurrency.toUpperCase() === "EUR"
) {
  factor = RUB / EUR;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "RUB" &&
  newСurrency.toUpperCase() === "PLN"
) {
  factor = RUB / PLN;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "RUB" &&
  newСurrency.toUpperCase() === "GBP"
) {
  factor = RUB / GBP;
  result = conversionAmount * factor;
  alert(result);
}

// PLN
else if (
  currentСurrency.toUpperCase() === "PLN" &&
  newСurrency.toUpperCase() === "USD"
) {
  factor = PLN / USD;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "PLN" &&
  newСurrency.toUpperCase() === "EUR"
) {
  factor = PLN / EUR;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "PLN" &&
  newСurrency.toUpperCase() === "RUB"
) {
  factor = PLN / RUB;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "PLN" &&
  newСurrency.toUpperCase() === "GBP"
) {
  factor = PLN / GBP;
  result = conversionAmount * factor;
  alert(result);
}
// GBP
else if (
  currentСurrency.toUpperCase() === "GBP" &&
  newСurrency.toUpperCase() === "USD"
) {
  factor = GBP / USD;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "GBP" &&
  newСurrency.toUpperCase() === "EUR"
) {
  factor = GBP / EUR;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "GBP" &&
  newСurrency.toUpperCase() === "RUB"
) {
  factor = GBP / RUB;
  result = conversionAmount * factor;
  alert(result);
} else if (
  currentСurrency.toUpperCase() === "GBP" &&
  newСurrency.toUpperCase() === "PLN"
) {
  factor = GBP / PLN;
  result = conversionAmount * factor;
  alert(result);
}
again = prompt("Again calculate? yes or no");

if (again.toLowerCase() === "yes") {
  window.location.reload();
}
