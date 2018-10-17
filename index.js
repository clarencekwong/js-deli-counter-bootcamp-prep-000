function takeANumber () {
  var counter = 1
  counter += 1
  return counter
}

function nowServing(d) {
  if (d.length > 0) {
    var x = d.shift()
    return "Currently serving " + `${x}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(d) {
  if (d.length > 0) {
    var s = "The line is currently: 1. " + `${d[0]}`
    for (var i = 1; i < d.length; i++) {
      s += ", " + `${i+1}. ` + `${d[i]}`
    }
    return s
  } else {
    return "The line is currently empty."
  }
}