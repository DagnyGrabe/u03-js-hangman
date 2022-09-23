

document.addEventListener('DOMContentLoaded', () => {

    //CONSTANTS

    const characters = ['a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
    'x', 'y', 'z', 'å', 'ä', 'ö'];

    const songs = [
        { name:'när vi två blir en', 
          sound:'sound/tva-blir-en.mp3' }, 
        { name:'sommartider', 
          sound:'sound/sommartider.mp3' },
        { name:'gå och fiska', 
          sound:'sound/ga-och-fiska.mp3' }, 
        { name:'leva livet', 
          sound: 'sound/leva-livet.mp3' },
        { name:'puls', 
          sound: 'sound/puls.mp3' },
        { name:'flickorna på tv två', 
          sound:'sound/tv-tva.mp3' }, 
        { name:'ska vi älska så ska vi älska till buddy holly',
          sound:'sound/buddy-holly.mp3' },
        { name:'guld',
          sound:'sound/guld.mp3' },
        { name:'när ni faller faller ni hårt',
          sound:'sound/nar-ni-faller.mp3' },
        { name:'kung av sand',
          sound:'sound/kung-av-sand.mp3' },
        { name:'juni juli augusti', 
          sound:'sound/juni-juli-augusti.mp3' },
        { name:'ljudet av ett annat hjärta', 
          sound:'sound/ett-annat-hjarta.mp3' },
        { name:'här kommer alla känslorna', 
          sound:'sound/kanslorna.mp3' },
        { name:'tycker om när du tar på mig', 
          sound:'sound/tycker-om.mp3' },
        { name:'en händig man', 
          sound:'sound/handig-man.mp3' },
        { name:'himmel nummer sju',
          sound:'sound/himmel-nummer-sju.mp3' },
        { name:'tuff tuff tuff',
          sound:'sound/tuff-tuff-tuff.mp3' },
        { name:'på promenad genom stan', 
          sound:'sound/promenad.mp3' },
        { name:'smakar på ett regn', 
          sound:'sound/smakar-pa-ett-regn.mp3' },
        { name:'flickan i en cole porter sång', 
          sound:'sound/cole-porter-sang.mp3' },
        { name:'kärleken är inte blind', 
          sound:'sound/karleken-ar-inte-blind.mp3' },
        { name:'tuffa tider', 
          sound:'sound/tuffa-tider.mp3' },
        { name:'det hjärta som brinner', 
          sound:'sound/det-hjarta-som-brinner.mp3' },
        { name:'billy', 
          sound:'sound/billy.mp3' },
        { name:'på jakt efter liv', 
          sound:'sound/pa-jakt-efter-liv.mp3' },
        { name:'bäst när det gäller', 
          sound:'sound/bast-nar-det-galler.mp3' },
        { name:'chikaboom', 
          sound:'sound/chikaboom.mp3' },
        { name:'marie i växeln',
          sound:'sound/marie-i-vaxeln.mp3' },
        { name:'fån telefon',
          sound:'sound/fan-telefon.mp3' }, 
        { name:'chrissie hur mår du',
          sound:'sound/chrissie.mp3' }
        ];

    //create button to restart game
    const restartButton = document.createElement('button');
    
    //create message to display if you win or lose
    const winLoseText = document.createElement('h2');
    const win = 'Yes! Du är ett äkta Per Gessle-fan!';
    const lose = 'Du behöver visst lyssna mer på Per Gessle';

    //QUERYSELECTORS

    const displayAlphabet = document.querySelector('.alphabet');
    const usedCharacters = document.querySelector('.used');
    const image = document.querySelector('.image');
    const displayWord = document.querySelector('.word');
    const restartGame = document.querySelector('.restart-game');

    //VARIABLES

    /* picking a random song from the songs Array and saving
    the song name and audio in a variable */
    let songNumber = Math.floor(Math.random() * songs.length);
    let chosenSong = songs[songNumber].name;
    let chosenSongAudio = new Audio(songs[songNumber].sound);
    let scream = new Audio('sound/scream.mp3');

    //create an array to save the wrong Guesses
    let wrongAttempts = [];
    
    
    //FUNCTIONS

    //displays the characters as buttons
    function createAlphabet() {
        for (let i = 0; i < characters.length; i++) {
            let character = document.createElement('button');
            displayAlphabet.appendChild(character);
            character.textContent = characters[i];
            character.setAttribute('class', 'character-button');
            character.setAttribute('id', characters[i]);
        }
        
    } 

    //displays the picked word as dashes
    function createWord() {
        let dashes = ''
        for (let i = 0; i < chosenSong.length; i++) {
            if (chosenSong[i] === ' ') {
                dashes += ' '
            } else {
                dashes += '_'
            }
        }
        displayWord.textContent = dashes;
    }

    /* removes the clicked button from available buttons,
       appends it to the used letters,
       checks if the picked word contains the letter,
       appends it to wrong guesses if it's wrong,
       displays it in the word if it's correct,
       changes the image according to the number of wrong guesses,
       adds win and lose cases
       and plays the correct song when you win */

    function clickCharacterButton(e) {
        
        if (e.target !== e.currentTarget) {
            let clickedItem = e.target;
            let itemId = e.target.getAttribute('id');
       
            clickedItem.parentNode.removeChild(clickedItem);
            usedCharacters.appendChild(clickedItem);
            
            let songArray = chosenSong.split('');
            let wordArray = displayWord.textContent.split('');
            
            if (songArray.includes(itemId) === false) {
                wrongAttempts.push(itemId);
            }
            
            for (i = 0; i < songArray.length; i++) {
                if (songArray[i] === itemId) {
                    wordArray[i] = itemId;
                }
            }
        
            displayWord.textContent = wordArray.join('');

            if (wrongAttempts.length === 1) {
                image.setAttribute('src', 'img/Hangman2.png');
            } else if (wrongAttempts.length === 2) {
                image.setAttribute('src', 'img/Hangman3.png');
            } else if (wrongAttempts.length === 3) {
                image.setAttribute('src', 'img/Hangman4.png');
            } else if (wrongAttempts.length === 4) {
                image.setAttribute('src', 'img/Hangman5.png');
            } else if (wrongAttempts.length === 5) {
                image.setAttribute('src', 'img/Hangman6.png');
            } else if (wrongAttempts.length === 6) {
                image.setAttribute('src', 'img/Hangman7.png');
            } else if (wrongAttempts.length >= 7) {
                image.setAttribute('src', 'img/Hangman8.png');

                scream.play();
                displayRestartButton();
                disableButtons();
                displayWinLoseMessage(lose);
            } 

            if (displayWord.textContent === chosenSong) {
                
                chosenSongAudio.play();
                
                displayRestartButton();
                disableButtons();
                displayWinLoseMessage(win);
            }


        }  
    }
    
    //displays the restart game button
    function displayRestartButton() {
        restartGame.appendChild(restartButton);
        restartGame.setAttribute('class', 'done');
        restartButton.setAttribute('class', 'restart');
        restartButton.textContent = 'Spela igen';
    } 
    
    //displays the win or lose message when game is over
    function displayWinLoseMessage(winLose) {
        restartGame.appendChild(winLoseText);
        winLoseText.textContent = winLose;
    }
    
    /* disables the character buttons
       to stop the game after either winning or losing */
    function disableButtons() {
        let buttons = displayAlphabet.children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('disabled', true);
        }
    }
   
    //EVENTLISTENERS

    displayAlphabet.addEventListener('click', clickCharacterButton);
    
    restartButton.addEventListener('click', function() {
        window.location.reload();
    });

    //calling functions to start the game
    createAlphabet();
    createWord();   
    
});