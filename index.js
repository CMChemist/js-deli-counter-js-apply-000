function takeANumber (katzDeli, name) {
  var numInLine = katzDeli.length + 1;
  katzDeli.push(`${name}`);
  var localString = "Welcome, " + `${name}` + ". You are number " + `${numInLine}` + " in line.";
  return localString;
}

function nowServing (katzDeliLine) { x
  var localString = katzDeliLine.length > 0 ? "Currently serving " + `${katzDeliLine[0]}` + "." : "There is nobody waiting to be served!"
   katzDeliLine.shift();
   return localString;
}

function currentLine (katzDeliLine) {
  var localString = 'The line is currently: ';
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i < katzDeliLine.length - 1){
        localString += `${i+1}` + ". " + `${katzDeliLine[i]}` + ', ';
      } else {
        localString += `${i+1}` + ". " + `${katzDeliLine[i]}`;
      }
    }
  } else {
    localString = "The line is currently empty."
  }
  return localString;
}