function start() {
  let button1 = document.getElementById("button1");
  button1.onclick = toggleContent;
}

function toggleContent() {
  let hour = +document.getElementById('hour').value; // take value as a hour
  let minute = +document.getElementById('minute').value;
  let liquid = document.getElementById('Clock');

  if (isNaN(hour) || hour < 0) { // move exit condition to top and exit early
      alert("Invalid Entry. Enter a hour.")
      return;
  }

  if (isNaN(minute) || minute < 0) { // move exit condition to top and exit early
    alert("Invalid Entry. Enter a minute.")
    return;
  }

  if (hour == 1 && minute == 45) {
      liquid.src = 'pics/145oc.png';
      liquid.alt = '1:45';
      console.log("1:45");
  } else if (hour == 1 && minute == 30) {
      liquid.src = 'pics/130oc.png';
      liquid.alt = '1:30';
      console.log("1:30");
  } else if (hour == 1 && minute == 15) {
    liquid.src = 'pics/115oc.png';
    liquid.alt = '1:15';
    console.log("1:15");
  } else if (hour == 1) {
  liquid.src = 'pics/1oc.png';
  liquid.alt = '1:00';
  console.log("1:00");
  }


  if (hour == 2 && minute == 45) {
    liquid.src = 'pics/245oc.png';
    liquid.alt = '2:45';
    console.log("1:45");
  } else if (hour == 2 && minute == 30) {
      liquid.src = 'pics/230oc.png';
      liquid.alt = '2:30';
      console.log("2:30");
  } else if (hour == 2 && minute == 15) {
    liquid.src = 'pics/215oc.png';
    liquid.alt = '2:15';
    console.log("2:15");
  } else if (hour == 2) {
  liquid.src = 'pics/2oc.png';
  liquid.alt = '2:00';
  console.log("2:00");
  }


  if (hour == 3 && minute == 45) {
    liquid.src = 'pics/345oc.png';
    liquid.alt = '3:45';
    console.log("3:45");
  } else if (hour == 3 && minute == 30) {
    liquid.src = 'pics/330oc.png';
    liquid.alt = '3:30';
    console.log("3:30");
  } else if (hour == 3 && minute == 15) {
  liquid.src = 'pics/315oc.png';
  liquid.alt = '3:15';
  console.log("3:15");
  } else if (hour == 3) {
  liquid.src = 'pics/3oc.png';
  liquid.alt = '3:00';
  console.log("3:00");
  }


  if (hour == 4 && minute == 45) {
    liquid.src = 'pics/445oc.png';
    liquid.alt = '4:45';
    console.log("4:45");
  } else if (hour == 4 && minute == 30) {
    liquid.src = 'pics/430oc.png';
    liquid.alt = '4:30';
    console.log("4:30");
  } else if (hour == 4 && minute == 15) {
  liquid.src = 'pics/415oc.png';
  liquid.alt = '4:15';
  console.log("4:15");
  } else if (hour == 4) {
  liquid.src = 'pics/4oc.png';
  liquid.alt = '4:00';
  console.log("4:00");
  }


  if (hour == 5 && minute == 45) {
    liquid.src = 'pics/545oc.png';
    liquid.alt = '5:45';
    console.log("5:45");
  } else if (hour == 5 && minute == 30) {
    liquid.src = 'pics/530oc.png';
    liquid.alt = '5:30';
    console.log("5:30");
  } else if (hour == 5 && minute == 15) {
  liquid.src = 'pics/515oc.png';
  liquid.alt = '5:15';
  console.log("5:15");
  } else if (hour == 5) {
  liquid.src = 'pics/5oc.png';
  liquid.alt = '5:00';
  console.log("5:00");
  }


  if (hour == 6 && minute == 45) {
    liquid.src = 'pics/645oc.png';
    liquid.alt = '6:45';
    console.log("6:45");
  } else if (hour == 6 && minute == 30) {
    liquid.src = 'pics/630oc.png';
    liquid.alt = '6:30';
    console.log("6:30");
  } else if (hour == 6 && minute == 15) {
  liquid.src = 'pics/615oc.png';
  liquid.alt = '6:15';
  console.log("6:15");
  } else if (hour == 6) {
  liquid.src = 'pics/6oc.png';
  liquid.alt = '6:00';
  console.log("6:00");
  }


  if (hour == 7 && minute == 45) {
    liquid.src = 'pics/745oc.png';
    liquid.alt = '7:45';
    console.log("7:45");
  } else if (hour == 7 && minute == 30) {
    liquid.src = 'pics/730oc.png';
    liquid.alt = '7:30';
    console.log("7:30");
  } else if (hour == 7 && minute == 15) {
  liquid.src = 'pics/715oc.png';
  liquid.alt = '7:15';
  console.log("7:15");
  } else if (hour == 7) {
  liquid.src = 'pics/7oc.png';
  liquid.alt = '7:00';
  console.log("7:00");
  }


  if (hour == 8 && minute == 45) {
    liquid.src = 'pics/845oc.png';
    liquid.alt = '8:45';
    console.log("8:45");
  } else if (hour == 8 && minute == 30) {
    liquid.src = 'pics/830oc.png';
    liquid.alt = '8:30';
    console.log("8:30");
  } else if (hour == 8 && minute == 15) {
  liquid.src = 'pics/815oc.png';
  liquid.alt = '8:15';
  console.log("8:15");
  } else if (hour == 8) {
  liquid.src = 'pics/8oc.png';
  liquid.alt = '8:00';
  console.log("8:00");
  }


  if (hour == 9 && minute == 45) {
    liquid.src = 'pics/945oc.png';
    liquid.alt = '9:45';
    console.log("9:45");
  } else if (hour == 9 && minute == 30) {
    liquid.src = 'pics/930oc.png';
    liquid.alt = '9:30';
    console.log("9:30");
  } else if (hour == 9 && minute == 15) {
  liquid.src = 'pics/915oc.png';
  liquid.alt = '9:15';
  console.log("9:15");
  } else if (hour == 9) {
  liquid.src = 'pics/9oc.png';
  liquid.alt = '9:00';
  console.log("9:00");
  }


  if (hour == 10 && minute == 45) {
    liquid.src = 'pics/1045oc.png';
    liquid.alt = '10:45';
    console.log("10:45");
  } else if (hour == 10 && minute == 30) {
    liquid.src = 'pics/1030oc.png';
    liquid.alt = '10:30';
    console.log("10:30");
  } else if (hour == 10 && minute == 15) {
  liquid.src = 'pics/1015oc.png';
  liquid.alt = '10:15';
  console.log("10:15");
  } else if (hour == 10) {
  liquid.src = 'pics/10oc.png';
  liquid.alt = '10:00';
  console.log("10:00");
  }


  if (hour == 11 && minute == 45) {
    liquid.src = 'pics/1145oc.png';
    liquid.alt = '11:45';
    console.log("11:45");
  } else if (hour == 11 && minute == 30) {
    liquid.src = 'pics/1130oc.png';
    liquid.alt = '11:30';
    console.log("11:30");
  } else if (hour == 11 && minute == 15) {
  liquid.src = 'pics/1115oc.png';
  liquid.alt = '11:15';
  console.log("11:15");
  } else if (hour == 11) {
  liquid.src = 'pics/11oc.png';
  liquid.alt = '11:00';
  console.log("11:00");
  }


  if (hour == 12 && minute == 45) {
    liquid.src = 'pics/1245oc.png';
    liquid.alt = '12:45';
    console.log("12:45");
  } else if (hour == 12 && minute == 30) {
    liquid.src = 'pics/1230oc.png';
    liquid.alt = '12:30';
    console.log("12:30");
  } else if (hour == 12 && minute == 15) {
  liquid.src = 'pics/1215oc.png';
  liquid.alt = '12:15';
  console.log("12:15");
  } else if (hour == 12) {
  liquid.src = 'pics/12oc.png';
  liquid.alt = '12:00';
  console.log("12:00");
  }
  
  
}


window.onload = start;