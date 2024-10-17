function checkAnswer2(correctAnswer,nextpage,downpage) {
    
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) 
        {   
        saveScore(10);
        window.open(downpage, '_blank');
        window.location.href = nextpage;
        } 
    else {
        alert('Falsche Antwort! Versuchen Sie es erneut!');
    }
}
function saveScore(score) {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 100;
    }
    totalScore = parseInt(totalScore) + score;
    sessionStorage.setItem('totalScore', totalScore);
    
}


