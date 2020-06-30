// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = () => {
  event.target.style.backgroundColor = 'grey'
}
const keyReturn = () => {
  event.target.style.backgroundColor = ''
}
// Write a named function with event handler properties
const keyColorChange = (note) => {
  note.onmousedown = keyPlay
  note.onmouseup = keyReturn
}

// Write a loop that runs the array elements through the function
notes.forEach(keyColorChange)



// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = () => {
  nextTwo.hidden = false
  nextOne.hidden = true
  let element1 = document.getElementById('letter-note-five')
  let element2 = document.getElementById('letter-note-six')
  element1.innerHTML = 'D'
  element2.innerHTML = 'C'
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = () => {
  nextThree.hidden = false
  nextTwo.hidden = true
  let element1 = document.getElementById('word-five')
  let element2 = document.getElementById('word-six')
  let element3 = document.getElementById('letter-note-three')
  let element4 = document.getElementById('letter-note-four')
  let element5 = document.getElementById('letter-note-five')
  let element6 = document.getElementById('letter-note-six')
  element1.innerHTML = 'DEAR'
  element2.innerHTML = 'FRI-'
  element3.innerHTML = 'G'
  element4.innerHTML = 'E'
  element5.innerHTML = 'C'
  element6.innerHTML = 'B'
  lastLyric.style.display = 'inline-block'

}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = () => {
  startOver.hidden = false
  nextThree.hidden = true
  document.getElementById('word-one').innerHTML = 'HAP-'
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU'

  document.getElementById('letter-note-one').innerHTML = 'F'
  document.getElementById('letter-note-two').innerHTML = 'F'
  document.getElementById('letter-note-three').innerHTML = 'E'
  document.getElementById('letter-note-four').innerHTML = 'C'
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'

  lastLyric.style.display = 'none'
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

