function ventaMaxima(
  vend1: number[],
  vend2: number[],
  vend3: number[],
  vend4: number[],
  vend5: number[]
): void {
  let max1: number = -999;
  let max2: number = -999;
  let max3: number = -999;
  let max4: number = -999;
  let max5: number = -999;
  let sem1: number = 0;
  let sem2: number = 0;
  let sem3: number = 0;
  let sem4: number = 0;
  let sem5: number = 0;
  let mes1: number = 0;
  let mes2: number = 0;
  let mes3: number = 0;
  let mes4: number = 0;
  let mes5: number = 0;

  for (let i: number = 0; i < 12; i++) {
    if (max1 < vend1[i]) {
      max1 = vend1[i];
    }
    if (max2 < vend2[i]) {
      max2 = vend2[i];
    }
    if (max3 < vend3[i]) {
      max3 = vend3[i];
    }
    if (max4 < vend4[i]) {
      max4 = vend4[i];
    }
    if (max5 < vend5[i]) {
      max5 = vend5[i];
    }
  }
  for (let i: number = 0; i < 12; i++) {
    if (max1 === vend1[i]) {
      sem1 = i + 1;
    }
    if (max2 === vend2[i]) {
      sem2 = i + 1;
    }
    if (max3 === vend3[i]) {
      sem3 = i + 1;
    }
    if (max4 === vend4[i]) {
      sem4 = i + 1;
    }
    if (max5 === vend5[i]) {
      sem5 = i + 1;
    }
  }

  mes1 = (sem1 / 4) * 2;
  mes2 = (sem2 / 4) * 2;
  mes3 = (sem3 / 4) * 2;
  mes4 = (sem4 / 4) * 2;
  mes5 = (sem5 / 4) * 2;

  console.log("Camila: Venta maxima", max1, "Semana", sem1, " Mes", mes1);
  console.log("Franco: Venta maxima", max2, "Semana", sem2, " Mes", mes2);
  console.log("Sofia: Venta maxima", max3, "Semana", sem3, " Mes", mes3);
  console.log("Matias: Venta maxima", max4, "Semana", sem4, " Mes", mes4);
  console.log("Agustina: Venta maxima", max5, "Semana", sem5, " Mes", mes5);

  if (max1 > max2 && max1 > max3 && max1 > max4 && max1 > max5) {
    console.log("Camila tiene la mejor venta de la semana con:", max1);
  } else if (max2 > max1 && max2 > max3 && max2 > max4 && max2 > max5) {
    console.log("Franco tiene la mejor venta semanal con:", max2);
  } else if (max3 > max1 && max3 > max2 && max3 > max4 && max3 > max5) {
    console.log("Sofia tiene la mejor venta semanal con:", max3);
  } else if (max4 > max1 && max4 > max2 && max4 > max3 && max4 > max5) {
    console.log("Matias tiene la mejor venta semanl con:", max4);
  } else if (max5 > max1 && max5 > max2 && max5 > max3 && max5 > max4) {
    console.log("Agustina tien la mejor venta semanl con:", max5);
  }
}

function ventaMinima(
  vend1: number[],
  vend2: number[],
  vend3: number[],
  vend4: number[],
  vend5: number[]
): void {
  let min1: number = 99999;
  let min2: number = 99999;
  let min3: number = 99999;
  let min4: number = 99999;
  let min5: number = 99999;
  let sem1: number = 0;
  let sem2: number = 0;
  let sem3: number = 0;
  let sem4: number = 0;
  let sem5: number = 0;
  let mes1: number = 0;
  let mes2: number = 0;
  let mes3: number = 0;
  let mes4: number = 0;
  let mes5: number = 0;

  for (let i: number = 0; i < 12; i++) {
    if (min1 > vend1[i]) {
      min1 = vend1[i];
    }
    if (min2 > vend2[i]) {
      min2 = vend2[i];
    }
    if (min3 > vend3[i]) {
      min3 = vend3[i];
    }
    if (min4 > vend4[i]) {
      min4 = vend4[i];
    }
    if (min5 > vend5[i]) {
      min5 = vend5[i];
    }
  }
  for (let i: number = 0; i < 12; i++) {
    if (min1 === vendedor1[i]) {
      sem1 = i;
    }
    if (min2 === vend2[i]) {
      sem2 = i;
    }
    if (min3 === vend3[i]) {
      sem3 = i;
    }
    if (min4 === vend4[i]) {
      sem4 = i;
    }
    if (min5 === vend5[i]) {
      sem5 = i;
    }
  }

  mes1 = (sem1 / 4) * 2;
  mes2 = (sem2 / 4) * 2;
  mes3 = (sem3 / 4) * 2;
  mes4 = (sem4 / 4) * 2;
  mes5 = (sem5 / 4) * 2;

  console.log("Camila: Venta maxima", min1, "Semana", sem1, " Mes", mes1);
  console.log("Franco: Venta maxima", min2, "Semana", sem2, " Mes", mes2);
  console.log("Sofia: Venta maxima", min3, "Semana", sem3, " Mes", mes3);
  console.log("Matias: Venta maxima", min4, "Semana", sem4, " Mes", mes4);
  console.log("Agustina: Venta maxima", min5, "Semana", sem5, " Mes", mes5);

  if (min1 > min2 && min1 > min3 && min1 > min4 && min1 > min5) {
    console.log("Camila tiene la peor venta de la semana con:", min1);
  } else if (min2 > min1 && min2 > min3 && min2 > min4 && min2 > min5) {
    console.log("Franco tiene la peor venta semanal con:", min2);
  } else if (min3 > min1 && min3 > min2 && min3 > min4 && min3 > min5) {
    console.log("Sofia tiene la peor venta semanal con:", min3);
  } else if (min4 > min1 && min4 > min2 && min4 > min3 && min4 > min5) {
    console.log("Matias tiene la peor venta semanl con:", min4);
  } else if (min5 > min1 && min5 > min2 && min5 > min3 && min5 > min4) {
    console.log("Agustina tiene la peor venta semanl con:", min5);
  }
}

function promedioSemanal(
  vend1: number[],
  vend2: number[],
  vend3: number[],
  vend4: number[],
  vend5: number[]
): void {
  let acum1: number = 0;
  let acum2: number = 0;
  let acum3: number = 0;
  let acum4: number = 0;
  let acum5: number = 0;
  let prom1: number = 0;
  let prom2: number = 0;
  let prom3: number = 0;
  let prom4: number = 0;
  let prom5: number = 0;
  for (let i: number = 0; i < 12; i++) {
    acum1 = acum1 + vend1[i];
    acum2 = acum2 + vend2[i];
    acum3 = acum3 + vend3[i];
    acum4 = acum4 + vend4[i];
    acum5 = acum5 + vend5[i];
  }
  prom1 = acum1 / 12;
  prom2 = acum2 / 12;
  prom3 = acum3 / 12;
  prom4 = acum4 / 12;
  prom5 = acum5 / 12;
  console.log("El promedio semanal de Camila es:", prom1);
  console.log("El promedio semanal de Franco es:", prom2);
  console.log("El promedio semanal de Sofia es:", prom3);
  console.log("El promedio semanal de Matias es:", prom4);
  console.log("El promedio semanal de Agustina es:", prom5);
}

function promedioMensual(
  vend1: number[],
  vend2: number[],
  vend3: number[],
  vend4: number[],
  vend5: number[]
): void {
  let mes1: number = 0;
  for (let i: number = 0; i < 4; i++) {
    mes1 = mes1 + vend1[i];
  }
}

let vendedor1: number[] = new Array(
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
);
let vendedor2: number[] = new Array(
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
);
let vendedor3: number[] = new Array(
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
);
let vendedor4: number[] = new Array(
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
);
let vendedor5: number[] = new Array(
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
);

ventaMaxima(vendedor1, vendedor2, vendedor3, vendedor4, vendedor5);
ventaMinima(vendedor1, vendedor2, vendedor3, vendedor4, vendedor5);
promedioSemanal(vendedor1, vendedor2, vendedor3, vendedor4, vendedor5);
