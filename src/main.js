const faqQuestion = document.querySelectorAll('.faq__question-wrapper');
const answer = document.querySelectorAll('.faq__answer');


for(let i=0; i < faqQuestion.length; i++){
    faqQuestion[i].addEventListener('click', () => {
        if(faqQuestion[i].classList.contains('active')){
            faqQuestion[i].classList.remove('active');
            faqQuestion[i].classList.remove('rotated');
            answer[i].style.display = 'none';
        }else{
            faqQuestion[i].classList.add('active');
            faqQuestion[i].classList.add('rotated');
            answer[i].style.display = 'block';
        };
    });
};
        
