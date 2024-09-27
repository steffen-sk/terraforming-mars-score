document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('game-results-form');
    const resultsList = document.getElementById('results-list');
    const averageScoreEl = document.getElementById('average-score');
    let results = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const playerName = event.target.playerName.value;
        const score = parseInt(event.target.score.value);
        
        results.push({ playerName, score });
        displayResults();
        analyzeResults();
        
        form.reset();
    });

    function displayResults() {
        resultsList.innerHTML = '';
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = `${result.playerName}: ${result.score}`;
            resultsList.appendChild(li);
        });
    }

    function analyzeResults() {
        if (results.length === 0) return;
        
        const totalScore = results.reduce((acc, result) => acc + result.score, 0);
        const averageScore = totalScore / results.length;
        
        averageScoreEl.textContent = `Average Score: ${averageScore.toFixed(2)}`;
    }
});
