export default questions; 

const questions = [{
  questionText: 'Hur skriver vi block-kommentarer i JavaScript?',
  answerOptions: [
    '/* comment */',
    '// comment //',
    '*/ comment /*',
    '** comment **'
  ],
  correctAnswer: '/* comment */',
  answerInfo: 'Det här går bra',
},
{
  questionText: 'Vilket av följande hämtar ut det sista elementet i arrayen `arr`?',
  answerOptions: [
    'arr[arr.length]',
    'arr[arr.length - 1]',
    'arr[arr.length + 1]',
    'arr[arr.length] + 1'
  ],
  correctAnswer: 'arr[arr.length - 1]',
  answerInfo: 'Det här går bra',
},
{
  questionText: 'Vilket är det korrekta sättet att skapa en array i JavaScript?',
  answerOptions: [
    'const doggos = 1 = "Chewbarka", 2 = "Bark Obama", 3 = "Luke Skybarker";',
    'const doggos = "Chewbarka", "Bark Obama", "Luke Skybarker";',
    'const doggos = ["Chewbarka", "Bark Obama", "Luke Skybarker"];',
          'const doggos = (1: "Chewbarka", 2: "Bark Obama", 3: "Luke Skybarker");'
  ],
  correctAnswer: 'const doggos = ["Chewbarka", "Bark Obama", "Luke Skybarker"];',
  answerInfo: 'Det här går bra',
},
{
  questionText: 'Vilken datatyp är INTE primitiv ',
  answerOptions: [
    'String',
    'Number',
    'Boolean',
          'Object'
  ],
  correctAnswer: 'Object',
  answerInfo: 'Det här går bra',
},
  {
  questionText: 'Hur skriver vi rad-kommentarer i JavaScript?',
  answerOptions: [
    '/*/ Pick me /*/',
    '// No pick me!',
    '-- Ignore them, pick me!',
          '** Never mind the others, pick me! **'
  ],
  correctAnswer: '// No pick me!',
  answerInfo: 'Det här går bra',
},
  {
  questionText: 'Hur skapar vi en funktion i JavaScript om vi vill lagra den i en variabel?',
  answerOptions: [
    'const myFunc = function() {}',
    'const myFunc() = function {}',
    'const myFunc = function {}',
          'const myFunc() = function() {}'
  ],
  correctAnswer: 'const myFunc = function() {}',
  answerInfo: 'Det här går bra',
},
  {
  questionText: 'Vilken är HTML-elementet som vi kan använda för att skriva JavaScript-kod under?',
  answerOptions: [
    "javascript",
    'scripted',
    'script',
          'js'
  ],
  correctAnswer: 'script',
  answerInfo: 'Det här går bra',
},
  {
  questionText: 'Vad heter händelsen som utlöses när en användare klickar på ett HTML-element?',
  answerOptions: [
    'Change',
    'Click',
    'Mouseclick',
          'Mouseover'
  ],
  correctAnswer: 'Click',
  answerInfo: 'Det här går bra',
},
  {
  questionText: 'Hur kan vi visa en alert-box med hjälp av JavaScript?',
  answerOptions: [
    'msg("Surprise!")',
    'msgbox("Surprise!")',
    'alert("Surprise!")',
          'alertbox("Surprise!")'
  ],
  correctAnswer: 'alert("Surprise!")',
  answerInfo: 'Det här går bra',
},
  {
  questionText: 'Vilken av följande metoder kallar på en funktion för varje element i en array?',
  answerOptions: [
    'each()',
    'every()',
    'forEach()',
          'forEvery()'
  ],
  correctAnswer: 'forEach()',
  answerInfo: 'Det här går bra',
}

];