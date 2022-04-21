//zegar

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("zegar").innerHTML = h + ":" + m + ":" + s;

  setTimeout(startTime, 1000); //dzięki temu funkcja odpala się co sekundę i dlatego zmienia się czas na zegarze
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}


