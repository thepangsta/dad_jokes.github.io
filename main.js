var jokes = [
    'q: what kind of music do mummies listen to? wrap music',
    'q: why did the tomato blush? because it saw the salad dressing',
    'q: what is Forrest Gump\'s password? 1forrest1',
    'q: what did the buffalo say to his son at school dropoff? bison',
    'q: what did the bread say to the angry bread? why you sour dough?',
    'q: want to hear a joke about paper? nevermind, it\'s tearable',
    'q: how do you organize a party in space? you planet'
]

function newJoke() {
    var randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('jokeDisplay').innerHTML = jokes[randomNumber];
}

// window.onload = choosePic;

var dadPix = new Array("Dad_Jokes/dad photos/confused.jpg", "Dad_Jokes/dad photos/tie.jpg", "Dad_Jokes/dad photos/grandpa.jpg", 
"Dad_Jokes/dad photos/thumbs.jpg", "Dad_Jokes/dad photos/lightbulb.jpg", "Dad_Jokes/dad photos/great idea.jpg")

function choosePic() {
    var randomNum = Math.floor(Math.random() * dadPix.length);
    document.getElementById("dadPhoto").src = dadPix[randomNum];
}
