// code your solution here
function saturdayFun(play = "roller-skate"){
  return(`This Saturday, I want to ${play}!`);
}
saturdayFun();


const mondayWork = function (work = "go to the office") {
    return(`This Monday, I will ${work}.`);
}

function wrapAdjective (not = '*') {
 return function(name='special') {
    return `You are ${not}${name}${not}!`
    }
}
