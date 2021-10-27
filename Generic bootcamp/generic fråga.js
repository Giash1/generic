Datatyper
1 Vilka datatyper finns det i JS?

2 Är följande if sats true eller false?

let a = 1;
let b = '1';
if(a == b) // true or false
3 Vad är den tekniska skillnaden på dessa två deklarationer?

let name = 'Greta Thunberg';
var name = 'Greta Thunberg';
4. Hur tar man reda på vad en variabel har för datatyp?

Block
5 Vilken av följande syntax visar ett kodblock?

[] // A 
() // B
{} // C
6 Vad i följande kod är blocket som exekveras?

function hello(){
  console.log("Hello")
}
function goodbye(){
  console.log("Goodbye")
}
hello()
7 Vad kommer stå i console.log()?

var greeting = 'Good bye world!';

{
    let greeting = 'Hello World';
}

console.log(greeting);
Strings
8 Vilken av följande syntax är korrekt sätt att skriva strängar.

"Hello World" // A
'Hello World' // B
`Hello World` // C
9 Räkna antal tecken i strängen nedan.

let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
10 Gör en template string där N ersätts med variabeln name.

let name = '<Ditt namn>' 
`Hej N din gamle knasboll!`
Arrays
11 Gör en array med 5 frukter i.

12 Lägg till en frukt i början och en frukt i slutet på arrayen.

13 I ovanstående fruktarray, plocka bort första och sista frukten.

14 I följande array, sätt in två nya frukter på index 2.

let fruits = ['apple', 'orange', 'pear', 'kiwi']
15 Klona följande array och ändra första frukten till pineapple.

let fruits = ['apple', 'orange', 'pear', 'kiwi']
16 Sortera följande array i fallande ordning.

let num = [1,5,78,7,122,3,4,65,40,2,8]
17 Lägg ihop följande arrayer.

let a = [1,2,3];
let b = [4,5,6];
18 Mixa följande arrayer där varannan är från array a och varanan från array b.

let a = ['My', 'has', 'many', 'open'];
let b = ['brain', 'to', 'tabs', '!'];
19 Merga in array a i array b på index 2.

let a = [1,2,7,8,9,10];
let b = [3,4,5,6];
20 Gör alla namn i array names till versaler.

let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
21 Filtrera fram samtliga personer som är 30 år eller äldre.

let names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
    ];
22 Skriv koden för att undersöka om arrayen names innehåller namnet Ewa. Ditt svar ska vara true eller false.

let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
Loops
23 Skapa en for-loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.

24 Skapa en for-loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.

25 Loopa ut följande array med console.log().

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
26 Loopa ut föjande array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.

27 Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.

[..., 'hjärter 8', 'hjärter 9', ...]
hint
Objects
28 Skapa en ett objekt som heter book och som har egenskaperna title, author och genres. De två första egenskaperna ska vara strängar och den sista en array.

29 console.log() endast egenskapen city i följande objekt.

let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}
30 Klona ett objekt.

31 Skapa objektet dog med egenskaperna name, breed och metoden bark som ska returnera "Woff, jag heter N!" där N ska ersättas med egenskapen name i samma objekt.

32 Loopa ut följande objekt där key och value ska console.log(). Ex. "name - Sixten".

let person = { 
    name: 'sixten',
    email: 'sixten@zocom.se', 
    role: 'ninjah',
    age: 32 
    }
Functions
33 Skriv en funktion som adderar två numeriska argument (x och y ) och returnerar.

34 Skriv en anonym funktion som returnerar en sträng som förklarar skillnaden på namnade- och anonyma funktioner.

35 Skriv en funktion som plockar ut året från en sträng i datumformat. Funktionen ska ta ett argument, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.

getYear('2019-10-14') // 2019
hint
36 Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en aritmetisk operator d.v.s antingen '+', '-', '/', '*'.

calcThis(1,2,'+') // 3
Conditionals
37 Skriv en funktion som jämför om två tal är likadana och returnerar true / false.

compareThis(1,1) // true
campareThis(3,1) // false
38 Skriv en funktion som kollar om ett tal är mellan 20 och 40 och returnerar true / false.

between(30) // true
between(50) // false
39 Skriv en funktion som jämför längden på två arrayer och returnerar den längsta.

getMeTheLongestArr([1,2], ['A','B','C']) // ['A','B','C']
Math object
40 Arunda talet 1337.51 nedåt till närmaste heltal med hjälp av Math object.

41 Arunda talet 1337.48 uppåt till närmaste heltal med hjälp av Math object.

42 Arunda talet 1337.497 till närmaste heltal med hjälp av Math object.

43 Skriv en funktion ( random(max) ) som tar ett numerisk argument ( max ). Funktionen ska returnera ett slumpat heltal mellan 0 och argumentet.

random(10000) // 1337
44 Skriv en funktion ( randomPassword(n) ) som tar ett numerisk argument ( n ). Funktionen ska returnera ett slumpat lösenord bestående av bokstäver och siffor med längden n.

randomPassword(7) // 4w3s0m3
45 Skriv en funktion ( randomName(names) ) som tar en array som argument ( names ). Funktionen ska returnera ett slumpat namn från arrayen.

const names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia']

randomName(names) // Greger
Program flow
46 Vad är skillnaden på följande två funktioner?

let getData = function(url) {};
function getData() {};
47 I vilken ordning kommer följande funktioner att exkveras?

// Execute
HelloAgainAgain();

function hello(){  
    console.log('Hello!') 
};

function helloAgain(){
    console.log('Hello Again!') 
    hello();
};

function HelloAgainAgain(){
    console.log('Hello Again Again!') 
    helloAgain();
}
48 Ordna programmet i rätt ordning så alla pokemons printas ut. All kod som behövs finns med.

for(let i=0;i<=pokemons.length;i++) {}

function printPokemons() {}

console.log("One awesome pokemon is " + pokemons[i]);

printPokemons();

let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];
49 Ordna programmet i rätt ordning så att det går att skicka in en sträng och få tillbaka den baklänges.

return newString;
let i = str.length - 1; i >= 0; i--
reverseString('hello');
str
function reverseString() {}
let newString = '';
for () {}
newString += str[i];
DOM manipulation
Single selector
50 Hämta innehållet i h2 från följande kod.

<article>
    <h2>Cowabunga!</h2>
    <p>Some interesting text.</p>
</article>
51 Hämta innehållet från 3:e li från följande kod.

<ul>
    <li>Gold</li>
    <li>Silver</li>
    <li>Bronze</li>
</ul>
Select All (node list)
52 Gör om innehållet alla li i nedanstående punktlista till versaler.

<ul>
    <li>Gold</li>
    <li>Silver</li>
    <li>Bronze</li>
</ul>
Value from input
53 Hämta värdet från nedanstående input-fält.

<input type="email" id="email">
54 Hämta det valda alternativet från nedanstående select-lista.

<select id="options">
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
</select>
Attributes
55 Hämta bildlänken i följande kod.

<img src="img/awesome.jpg" alt="awesome stuff" class="awesome" />
56 Kika om följande checkbox är iklickad eller ej.

<input type="checkbox" id="gdpr-ok" checked />
CSS
57 Lägg på classen .show på följande element.

<nav id="main-nav"></nav> 
58 Toggla classen .active på följande element.

<a id="home" href="#">Home</a> 
59 Lägg till classen .shadow på alla bilder i följande kod.

<figure class="gallery">
    <img src="img/image-1.jpg" alt="1">
    <img src="img/image-2.jpg" alt="2">
    <img src="img/image-3.jpg" alt="3">
</figure>
Create content
60 Skapa upp en h1-tagg och lägg till en rubrik och appenda den sedan på body.

hint
Events
61 Lyssna efter ett click event på följande element och skriv ut "go go go!" i console.log().

<button>Lets go!</button>
62 Lyssna efter ett click event på samtliga li i följande lista. Vid klick ska en alert() dyka upp där det står Jag älskar N!!! Ex. "Jag älskar äpple!!!"

<ul>
    <li>Päron</li>
    <li>Äpple</li>
    <li>Kiwi</li>
    <li>Keso</li>
    <li>Frystorkad mört</li>
</ul>
63 Följande input-fält ska console.log() innehållet när man trycker enter.

<input type="password" id="password" placeholder="password" />