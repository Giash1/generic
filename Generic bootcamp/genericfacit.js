1 String Boolean Number Array Object Function

2 true

3 let är bara synlig i det scope den finns var är synlig i hela funktionen

4

typeof(variable)
5 {}//C

6

{
  console.log("Hello")
}
7 'Good bye world!'

8 Alla är korrekta

9 97

10

`Hej ${name} din gamle knasboll!`
11

const fruits = ['tomato', 'dragon fruit', 'avocado', 'cucumber', 'olive']
12

fruits.push('corn')
fruits.unshift('pumpkin')
13

let last = fruits.pop()
let first = fruits.shift()
// Eller
fruits.splice(1, fruits.length-2)
14

fruits.splice(2,0, 'chili pepper', 'zuccini')
15

let fruits = ['apple', 'orange', 'pear', 'kiwi']
let clone = [...fruits]
clone[0] = 'pine apple'
16 // Callback-trolleri

num.sort( (a,b) => b - a)
17

let a = [1,2,3];
let b = [4,5,6];

// Alternativ 1
let c = [...a, ...b];

// Alternativ 2
let d = a.concat(b)
18 En lösning där båda arrayer är lika långa

let a = ['My', 'has', 'many', 'open'];
let b = ['brain', 'to', 'tabs', '!'];
let zipped = []
for(let i = 0; i < a.length; i++){
  zipped.push(a[i], b[i])
}
En lösning som fungerar oavsett hur stora arrayerna är

let zipped = []
let largest = Math.max(a.length, b.length)
for(let i = 0; i < largest; i++){
  if(a[i]){ 
    zipped.push(a[i]) 
  } 
  if(b[i]){ 
    zipped.push(b[i]) 
  } 
}
19

b.splice(2,0, ...a)
20

let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
for(let i = 0; i < names.length; i++){
  names[i] = names[i].toUpperCase()
}
21

let filtered = []
for(let person of names){
  if(person.age >= 30){
    filtered.push(person)
  }
}
22

names.includes('Ewa') // false
23

for(let i = 0; i < 1000; i++){
  console.log(i)
}
24

for(let i = 100; i >= 0; i--){
  console.log(i)
}
25

for(let fruit of fruits){
  console.log(fruit)
}
26

for(let i=0; i < fruits.length;i++){
  console.log(i, " " ,fruits[i])
}
27

let cards = []
const SUITES = ['hjärter', 'spader', 'ruter', 'klöver']
for(let i = 0; i < SUITES.length; i++){
  let suite = SUITES[i]
  for(let j = 1; j <= 13; j++){
    let card = `${suite} ${j}`
  }
}
En lösning så man får med Ess,Knekt, Dam och Kung istället för 1, 11, 12 och 13

function getCardValue(num){
  switch(num){
    case 1: return 'Ass';
    case 11: return 'Knäckt';
    case 12: return 'Damm';
    case 13: return 'Knug';
    default: return num
  }
}

let cards = []
const SUITES = ['hjärter', 'spader', 'ruter', 'klöver']
for(let i = 0; i < SUITES.length; i++){
  let suite = SUITES[i]
  for(let j = 1; j <= 13; j++){
    let card = `${suite} ${getCardValue(j)}`
  }
}
28

let book = {
  title: 'Tolv sätt att glömma nycklarna',
  author: 'Povel Ramel',
  genres: ['vetenskap', 'baskunskap']
}
29

console.log(person.adress.city)
30

let obj = {}
let clone = {...obj} // Shallow clone

let deepClone = JSON.parse(JSON.stringify(obj))
31

let dog = {
  name: 'Snoopy',
  breed: 'beagle',
  woff: function(){
    return `Woff, jag heter ${this.name}`
  }
}
32

let keys = Object.keys(person)
for(let key of keys){
  console.log(key, " - ", person[key])
}
Eller

let entries = Object.entries(person)
for(let entry of entries){
  console.log(entry[0], " - ", entry[1])
}
33

function add(a,b){
  return a+b
}
34

function(){
  return 'Jag har inget namn, för jag är en anonym funktion. Du borde skicka mig som argument till en annan funktion annars är jag förlorad för evigt.'
}
35

Med substring

function getYear(dateString){
  return Number(dateString.substring(0,4))
}
Eller med split

function getYear(dateString){
  const parts = dateString.split("-")
  return Number(parts[0])
}
Eller med destructuring

function getYear(dateString){
  const [year,month,day] = dateString.split("-")
  return Number(year)
}
36

Med if-satser

function calcThis(num1, num2, operator){
  if(operator == '+'){
    return num1 + num2;
  }else if(operator == '-'){
    return num1 - num2;    
  }else if(operator == '*'){
    return num1 * num2;    
  }else if(operator == '/'){
    return num1 / num2;    
  }  
}
Med switch-case

function calcThis(num1, num2, operator){
  switch(operator){
    case '+': return num1 + num2;    
    case '-': return num1 - num2;    
    case '*': return num1 * num2;    
    case '/': return num1 / num2;    
  }
}
37

function compareThis(num1,num2){
  return num1 == num2
}
Eller som arrow function

const compareThis = (num1,num2) => num1 == num2
38

function between(num){
  return num >= 20 && num <= 40
}
Eller som arrow function

const between = (num) => num >= 20 && num <= 40
39

function getMeTheLongestArr(arr1, arr2){
  if(arr1.length > arr2.length){
    return arr1
  }else{
    return arr2
  }
}
Eller som arrow function

const getMeTheLongestArr = (arr1, arr2) => {
  if(arr1.length > arr2.length){
    return arr1
  }else{
    return arr2
  }
}
Eller som arrow function med ternary if

const getMeTheLongestArr = (arr1, arr2) => 
  arr1.length > arr2.length ? arr1 : arr2;
40

Math.floor(1337.41)
41

Math.ceil(1337.41)
42

Math.round(1337.41)
43

function random(max){
  return Math.floor(Math.random()*max)
}
44

function randomPassword(len){
  let characters = "abcdefghijklmnopqrstuvxyzåäö"
  characters += character.toUpperCase()
  characters += "0123456789"

  let pw = ""
  for(let i = 0; i <len; i++){
    let randomIndex = random(characters.length) // Use function from previous exercise
    pw += characters[ randomIndex ]
  }
}
45

function randomName(names){
  return names[random(names.length)]
}
46 Den ena har en parameter, annars ingen skillnad

47

HelloAgainAgain
HelloAgain
hello
48

function printPokemons() {
  let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];
  for(let i=0;i<pokemons.length;i++) {
    console.log("One awesome pokemon is " + pokemons[i]);
  }
}
printPokemons();
49

function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString('hello');
50

const heading = document.querySelector("article h2")
51

const listItem = document.querySelector("ul li:nth-of-type(3)")
52

const listItems = document.querySelectorAll("li")
for(let item of listItems){
  item.innerText = item.innerText.toUpperCase()
}
53

const email = document.querySelector("#email")
const theEmail = email.value
54

const options = document.querySelector("#options")
const value = options.value
55

const img = document.querySelector("img.awesome")
const imageLink = img.getAttribute("src")
56

const checkbox = document.querySelector("#gdpr-ok")
if(checkbox.checked){
  // Yes.. it is
}
57

const nav = document.querySelector("#main-nav")
nav.classList.add("show")
58

const homeLink = document.querySelector("#home")
homeLink.classList.toggle("active")
59

const images = document.querySelectorAll(".gallery img")
for(let image of images){
  image.classList.add("shadow")
}
60

const heading = document.createElement("h1")
heading.innerText = "Awesome headline!"
document.body.append(heading)