// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array) {
    for (let object of array) {
        if (object.result === 'W') {
            return object.year
        }
    }
  }