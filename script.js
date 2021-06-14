'use strict';

let words_place = document.querySelector('.words_cat');
let diff_words = document.querySelector('.diff_words')
let timer_box = document.querySelector('.timer');
let time_left = document.querySelector('.time_left');
let score = document.querySelector('.score');
let input = document.querySelector('.different_input');
let options = document.querySelector('.options')
let end_box = document.querySelector('.end');
let main_box = document.querySelector('.box')
let score_text = document.querySelector('.score-text')
let reset_btn = document.querySelector('.reset');

const words = require('random-words');
let random_words = require('random-words');


let word
let generate_wordsEasy = () => {

     word = random_words({exactly:1 , maxLength:12});
     words_place.textContent = word;
}

let generate_wordsMedium = () => {
    word = random_words({exactly:1 , maxLength:15,wordsPerString:2});
    words_place.textContent = word;
    
    
}

let generate_wordsHard = () => {
    word = random_words({exactly:1 , maxLength:18,wordsPerString:2,separator:'-'});
    
    words_place.textContent = word;
}

let countScore = 0;

let calcMin = 0;
let seconds;

seconds = 8;

let option = 'Easy';

options.addEventListener('click',function()
{
   option = options.value;
})

let timer_on = () => {

    if(seconds == 1 && calcMin == 0)
{
     end_box.classList.remove('hidden');
     main_box.classList.add('hidden');
     score_text.textContent = `Your Score is ${countScore}`;

}

if(seconds == 0 && calcMin!=0) {

      seconds = 59;
      calcMin--;
}

   if(seconds > 60) {
       calcMin = Math.floor(seconds/60);
       seconds = seconds%60;
   }

   else if(seconds < 60)
   {
       seconds--;
   }
   let minute_zero = calcMin < 10 ? '0':'';
   let seconds_zero = seconds<10 ? '0':'';

   time_left.textContent = `Time left ${minute_zero}${calcMin}:${seconds_zero}${seconds}`;
  

} 

setInterval(timer_on,500)
generate_wordsEasy();

input.addEventListener('keydown',function(e)
{ 
      if(e.key == 'Enter')
    {
        if(input.value == word)
        {
            if(seconds > 0)
            {
                countScore++;

                score.textContent = `Score : ${countScore}`;

                console.log('hello');
                
                input.value = '';
                
                if(option == 'Easy')
                {
                    generate_wordsEasy();
                    seconds+=5;
                }
    
                else if(option == 'Medium')
                {
                    generate_wordsMedium();
                    seconds+=4;
                }
    
                else if(option == 'Hard')
                {
                    generate_wordsHard();
                    seconds+=3;
                }
            }
        }
    }
})

reset_btn.addEventListener('click',function()
{
    countScore = 0;
    seconds = 8;
    end_box.classList.add('hidden');
     main_box.classList.remove('hidden');
     score.textContent = `Score : ${countScore}`;
     generate_wordsEasy();
     options.value = 'Easy';
     input.value = '';
})
