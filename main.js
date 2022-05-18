
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS
var storyText = `
It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
`
var insertx = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
]


var inserty = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
 
]


var insertz =[
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
]


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let name = ''
  if(customName.value !== '') {
    name = customName.value;
  }
  let weight = 300+' pounds';
  let temperature = 94+ ' fahrenheit';
  if(document.getElementById("uk").checked) {
    weight = 21+' stone'
    temperature = 34+ ' centigrade'
}

  var newstory = storyText
  var xItem = randomValueFromArray(insertx) 
  var yItem = randomValueFromArray(inserty) 
  var zItem = randomValueFromArray(insertz) 
  newstory = newstory.replace(':insertx:',xItem)
  newstory = newstory.replace(':inserty:',yItem)
  newstory = newstory.replace(':insertz:',zItem)
  newstory = newstory.replace('Bob',name)
  newstory = newstory.replace('94 fahrenheit', temperature)
  newstory = newstory.replace('300 pounds', weight)

  story.textContent = newstory;
  story.style.visibility = 'visible';
}