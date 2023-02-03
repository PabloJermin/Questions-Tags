// Using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(quest){
    const bot = quest.querySelector('.question-btn')
        bot.addEventListener('click', function(){
            // another for each loop that selects all the articles 
            // and compares it to the already selected ones and removes it 
                 questions.forEach(function(iter){
                if(iter!==quest){
                    iter.classList.remove('show-text')
                }
            })
        quest.classList.toggle('show-text');
     })
   
})








// traversing the DOM

// const btns = document.querySelectorAll('.question-btn');
// const showTxt = document.querySelector('.show-text');


// btns.forEach(function(bot) {
//     bot.addEventListener('click', function(e){
//       const question = e.currentTarget.parentElement.parentElement;
//       question.classList.toggle('show-text');
//     })

// });

