/* =================================================
   MUSIC
   ================================================= */

const loveSong =
    document.getElementById("loveSong");

const proposalSong =
    document.getElementById("proposalSong");

const noSong =
    document.getElementById("noSong");


function startLoveSong() {

    proposalSong.pause();
    proposalSong.currentTime = 0;

    noSong.pause();
    noSong.currentTime = 0;

    loveSong.volume = 0.8;

    loveSong.play().catch(function () {
        // Browser blocked playback.
    });

}


function startProposalSong() {

    loveSong.pause();
    loveSong.currentTime = 0;

    noSong.pause();
    noSong.currentTime = 0;

    proposalSong.volume = 0.8;

    proposalSong.play().catch(function () {
        // Browser blocked playback.
    });

}


function startNoSong() {

    loveSong.pause();
    loveSong.currentTime = 0;

    proposalSong.pause();
    proposalSong.currentTime = 0;

    noSong.volume = 0.8;

    noSong.play().catch(function () {
        // Browser blocked playback.
    });

}


/* =================================================
   FALLING HEARTS
   ================================================= */

const mainHearts =
    document.getElementById("mainHearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.animationDelay =
        Math.random() * 5 + "s";

    mainHearts.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 12000);
}


for (let i = 0; i < 25; i++) {

    createHeart();

}


setInterval(function () {

    createHeart();

}, 700);


/* =================================================
   GIFT
   ================================================= */

const gift =
    document.getElementById("gift");


const loveText =
    document.getElementById("loveText");


const moreButton =
    document.getElementById("moreButton");


const photoScene =
    document.getElementById("photoScene");


let giftOpened = false;


gift.addEventListener("click", function () {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    gift.classList.add("open");

    startLoveSong();

    setTimeout(function () {

        typeMessage();

    }, 1200);

});


/* =================================================
   MESSAGE ON GIFT
   ================================================= */

const messageText =
    "Three years of memories, laughter, fights, silly moments and love... and somehow, I would still choose you again.";

let messageIndex = 0;


function typeMessage() {

    if (messageIndex >= messageText.length) {
        return;
    }

    loveText.textContent +=
        messageText[messageIndex];

    messageIndex++;

    setTimeout(
        typeMessage,
        45
    );
}


/* =================================================
   MORE BUTTON
   ================================================= */

moreButton.addEventListener("click", function (event) {

    event.stopPropagation();

    photoScene.classList.add("show");

    setTimeout(function () {

        photoScene.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 100);

});


/* =================================================
   LOVE LETTER TEXT
   ================================================= */

const letterText = `SOOO... Time really moved fast than expected.

But I am really and truly lucky to have a girl like youu in my boring life.

You make my day, you make me laugh, and you also make me cry sometimes 😂.

But even though we had fights, not talking to each other, at the end somehow we will choose to love each other and you choose me.

Yes, we have our own flaws, but we both want to love each other even knowing some of our flaws that make us hurt, and we will try to fix our flaws with each other's help.

All I hope is to live, have fights, irritate each other, and do many silly things like your cringee things, staying beside each other when we need each other the most when things get hard, and to loveee unconditionallyy.

I can't believe it's been threee damn years already 😂. 

And this is the only few from my side to show how much I love you💝..And sometimes things
get worse..really worse than ever imagined..Makes ur own self to question about ourselves...But
remeber my love..... trust me and everything's going to be alright...Even if things start to 
fall apart, we will build by staying together and staying strong...It always happen the way
it is supposed to happen...SO lets put an end to your fear 
that doubts our love...AND LETS START AGAIN...BUT WITHOUT FEAR THIS TIME ANDWE WILL MAKE IT
NO MATTER WHAT....

AND REMEMBER...YOU HAVE ME..

Lastly I want to say is...

I LOVE YOU HARSHIIII ❤️

AND HAPPYY ANNIVERSARY TO OUR THREE YEARS BELOVED RELATIONSHIP ❤️`;


/* =================================================
   LOVE LETTER PETALS
   ================================================= */

const loveLetterPetals =
    document.getElementById("loveLetterPetals");


function createLetterPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add(
        "love-letter-petal"
    );

    petal.innerHTML = "♥";

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.fontSize =
        (12 + Math.random() * 18) + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    petal.style.animationDelay =
        Math.random() * 5 + "s";

    loveLetterPetals.appendChild(petal);


    setTimeout(function () {

        petal.remove();

    }, 15000);
}


for (let i = 0; i < 20; i++) {

    createLetterPetal();

}


setInterval(function () {

    createLetterPetal();

}, 800);


/* =================================================
   LOVE LETTER PAGE
   ================================================= */

const readLetterButton =
    document.getElementById(
        "readLetterButton"
    );


const loveLetterPage =
    document.getElementById(
        "loveLetterPage"
    );


const typedLetter =
    document.getElementById(
        "typedLetter"
    );


/* =================================================
   FINAL QUESTION
   ================================================= */

const finalQuestion =
    document.getElementById(
        "finalQuestion"
    );


const yesButton =
    document.getElementById(
        "yesButton"
    );


const noButton =
    document.getElementById(
        "noButton"
    );


/* =================================================
   NO OPTION PAGE
   ================================================= */

const noOptionPage =
    document.getElementById(
        "noOptionPage"
    );


const noOptionPetals =
    document.getElementById(
        "noOptionPetals"
    );


/* =================================================
   OPEN LOVE LETTER
   ================================================= */

readLetterButton.addEventListener(
    "click",
    function () {

        loveLetterPage.classList.add(
            "open"
        );

        startProposalSong();


        setTimeout(function () {

            typeLetter();

        }, 4000);

    }
);


/* =================================================
   TYPE LOVE LETTER
   ================================================= */

function typeLetter() {

    typedLetter.textContent = "";

    let index = 0;

    const typingSpeed = 55;


    function typeNextCharacter() {

        if (index >= letterText.length) {

            setTimeout(function () {

                finalQuestion.classList.add(
                    "show"
                );

                setTimeout(function () {

                    finalQuestion.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 300);

            }, 2000);

            return;
        }


        typedLetter.textContent +=
            letterText[index];

        index++;


        setTimeout(
            typeNextCharacter,
            typingSpeed
        );

    }


    typeNextCharacter();

}


/* =================================================
   YES BUTTON
   ================================================= */

yesButton.addEventListener(
    "click",
    function () {

        /*
         * YES will be added later.
         * For now, nothing happens.
         */

    }
);


/* =================================================
   NO OPTION FALLING PETALS
   ================================================= */

function createNoOptionPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add(
        "no-option-petal"
    );

    petal.innerHTML = "♥";

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.fontSize =
        (12 + Math.random() * 18) + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    petal.style.animationDelay =
        Math.random() * 2 + "s";

    noOptionPetals.appendChild(
        petal
    );


    setTimeout(function () {

        petal.remove();

    }, 15000);

}


/* =================================================
   NO BUTTON
   ================================================= */

noButton.addEventListener(
    "click",
    function () {

        /*
         * Stop the love-letter song.
         */

        proposalSong.pause();
        proposalSong.currentTime = 0;


        /*
         * Open the blank white page.
         */

        noOptionPage.classList.add(
            "open"
        );


        /*
         * Create some petals immediately.
         */

        for (let i = 0; i < 25; i++) {

            createNoOptionPetal();

        }


        /*
         * Continue creating petals.
         */

        const noPetalInterval =
            setInterval(function () {

                if (
                    noOptionPage.classList.contains(
                        "open"
                    )
                ) {

                    createNoOptionPetal();

                } else {

                    clearInterval(
                        noPetalInterval
                    );

                }

            }, 800);


        /*
         * Start the separate NO song.
         */

        startNoSong();

    }
);