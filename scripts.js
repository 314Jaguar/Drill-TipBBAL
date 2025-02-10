document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const result = calculateQuizResult();
    displayQuizResult(result);
});

function calculateQuizResult() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let scores = {
        curry: 0,
        lebron: 0,
        giannis: 0,
        derozan: 0,
        exum: 0
    };

    answers.forEach(answer => {
        switch (answer.name) {
            case 'q1':
                if (answer.value === 'a') scores.curry++;
                if (answer.value === 'b') scores.lebron++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q2':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.curry++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.exum++;
                if (answer.value === 'e') scores.derozan++;
                break;
            case 'q3':
                if (answer.value === 'a') scores.giannis++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.lebron++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q4':
                if (answer.value === 'a') scores.exum++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.curry++;
                if (answer.value === 'e') scores.lebron++;
                break;
            case 'q5':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.derozan++;
                if (answer.value === 'd') scores.exum++;
                if (answer.value === 'e') scores.curry++;
                break;
            case 'q6':
                if (answer.value === 'a') scores.curry++;
                if (answer.value === 'b') scores.lebron++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q7':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q8':
                if (answer.value === 'a') scores.giannis++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.lebron++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q9':
                if (answer.value === 'a') scores.exum++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.curry++;
                if (answer.value === 'e') scores.lebron++;
                break;
            case 'q10':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.derozan++;
                if (answer.value === 'd') scores.exum++;
                if (answer.value === 'e') scores.curry++;
                break;
            case 'q11':
                if (answer.value === 'a') scores.curry++;
                if (answer.value === 'b') scores.lebron++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q12':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q13':
                if (answer.value === 'a') scores.giannis++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.lebron++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q14':
                if (answer.value === 'a') scores.exum++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.curry++;
                if (answer.value === 'e') scores.lebron++;
                break;
            case 'q15':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.derozan++;
                if (answer.value === 'd') scores.exum++;
                if (answer.value === 'e') scores.curry++;
                break;
            case 'q16':
                if (answer.value === 'a') scores.curry++;
                if (answer.value === 'b') scores.lebron++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q17':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q18':
                if (answer.value === 'a') scores.giannis++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.lebron++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q19':
                if (answer.value === 'a') scores.exum++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.curry++;
                if (answer.value === 'e') scores.lebron++;
                break;
            case 'q20':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.derozan++;
                if (answer.value === 'd') scores.exum++;
                if (answer.value === 'e') scores.curry++;
                break;
            case 'q21':
                if (answer.value === 'a') scores.curry++;
                if (answer.value === 'b') scores.lebron++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q22':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.derozan++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q23':
                if (answer.value === 'a') scores.giannis++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.curry++;
                if (answer.value === 'd') scores.lebron++;
                if (answer.value === 'e') scores.exum++;
                break;
            case 'q24':
                if (answer.value === 'a') scores.exum++;
                if (answer.value === 'b') scores.derozan++;
                if (answer.value === 'c') scores.giannis++;
                if (answer.value === 'd') scores.curry++;
                if (answer.value === 'e') scores.lebron++;
                break;
            case 'q25':
                if (answer.value === 'a') scores.lebron++;
                if (answer.value === 'b') scores.giannis++;
                if (answer.value === 'c') scores.derozan++;
                if (answer.value === 'd') scores.exum++;
                if (answer.value === 'e') scores.curry++;
                break;
            default:
                break;
        }
    });

    // Determine the highest score
    const highestScore = Math.max(scores.curry, scores.lebron, scores.giannis, scores.derozan, scores.exum);
    let result = '';

    if (scores.curry === highestScore) result = 'Steph Curry';
    if (scores.lebron === highestScore) result = 'LeBron James';
    if (scores.giannis === highestScore) result = 'Giannis Antetokounmpo';
    if (scores.derozan === highestScore) result = 'DeMar DeRozan';
    if (scores.exum === highestScore) result = 'Dante Exum';

    return