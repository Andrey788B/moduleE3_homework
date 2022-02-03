function NumbInt20_30() {
  var i = 5;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);
}

// вызов
printNumbInt20_30();
