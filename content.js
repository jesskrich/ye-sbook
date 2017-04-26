
var kanyeQuotes = [
    "I’m going down as a legend, whether you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.",
    "Everything I'm not made me everything I am... In my humble opinion that’s a prophetic statement. Gandhi would have said something like that.",
    "Visiting my mind is like visiting the Hermès factory.",
    "The Bible had 20, 30, 40, 50 characters in it. You don’t think that I would be one of the characters of today’s modern Bible?",
    "I just told you who I thought I was: A god. I just told you. That’s who I think I am.",
    "I’m the Number One living and breathing rock star.",
    "I am Warhol. I am the number one most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney. Nike. Google.",
    "I am so credible and so influential and so relevant that I will change things.",
    "I have, like, nuclear power, like a superhero, like Cyclops when he puts his glasses on.",
    "Come on now! How could you be me and want to be someone else?",
    "For me to say I wasn’t a genius I would just be lying to you and to myself.",
    "My music isn’t just music — it’s medicine.",
    "I’m like a vessel, and God has chosen me to be the voice and the connector.",
    "Jay is Kweli’s favorite rapper, 50 is Eminem’s favorite rapper, and I’m my favorite rapper.",
    "I feel like I’m too busy writing history to read it.",
    "I’m the fucking end-all, be-all of music.",
    "My greatest pain in life is that I will never be able to see myself perform live.",
    "I feel like a little bit, like I'm the Braveheart of Creativity",
    "I'm a creative genius and there's no other way to word it"
];

var spans = document.getElementsByClassName('_4a6n');

function myFunction() {
    for (var i = 0, l = spans.length; i < l; i++) {
            if (spans[i].edited != true) {
                spans[i].innerHTML=kanyeQuotes[Math.floor(Math.random()*kanyeQuotes.length)];
                spans[i].edited = true;
            }
            console.log(i);
    }
}


setInterval(myFunction, 3000);
