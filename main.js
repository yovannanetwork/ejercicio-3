var horas, pago, sueldo;

horas = prompt("Por favor, ingresa las horas trabajadas");
pago = prompt("Por favor, ingresa el pago por hora");

sueldo = parseFloat(horas) * parseFloat(pago);

alert(sueldo)

