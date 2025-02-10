const questions = [
    { question: "What is your preferred playing style?", choices: ["Mid-range scoring", "Three-point shooting", "Defense and versatility", "Athleticism and dunks"], scores: [0, 1, 2, 3] },
    { question: "How do you handle pressure during a game?", choices: ["Stay calm and focused", "Thrive under pressure", "Use it to motivate yourself", "Stay composed and lead by example"], scores: [0, 1, 2, 3] },
    { question: "What is your primary role on the team?", choices: ["Scorer", "Shooter", "Defender", "Playmaker"], scores: [0, 1, 2, 3] },
    { question: "How do you prepare for a game?", choices: ["Practice mid-range shots", "Practice three-pointers", "Study opponents' strategies", "Work on athleticism"], scores: [0, 1, 2, 3] },
    { question: "What is your go-to move?", choices: ["Fadeaway jumper", "Step-back three", "Steal and fast break", "Dunk"], scores: [0, 1, 2, 3] },
    { question: "How do you motivate your teammates?", choices: ["Lead by example", "Encourage them to shoot", "Focus on defense", "Bring energy to the game"], scores: [0, 1, 2, 3] },
    { question: "What is your reaction to a close game?", choices: ["Take control and score", "Shoot a three-pointer", "Defend the best player", "Drive to the basket"], scores: [0, 1, 2, 3] },
    { question: "What is your strength?", choices: ["Mid-range shooting", "Three-point shooting", "Defense", "Athleticism"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a double team?", choices: ["Pass to an open teammate", "Shoot over the defenders", "Drive to the basket", "Use quick moves to evade"], scores: [0, 1, 2, 3] },
    { question: "What is your weakness?", choices: ["Three-point shooting", "Defense", "Scoring consistency", "Turnovers"], scores: [0, 1, 2, 3] },
    { question: "How do you celebrate a win?", choices: ["Stay humble", "Celebrate with teammates", "Analyze the game", "Plan for the next game"], scores: [0, 1, 2, 3] },
    { question: "What do you do in the off-season?", choices: ["Work on mid-range game", "Practice shooting", "Improve defense", "Enhance athleticism"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite stat?", choices: ["Points", "Three-pointers made", "Steals", "Dunks"], scores: [0, 1, 2, 3] },
    { question: "How do you deal with a losing streak?", choices: ["Work harder", "Stay positive", "Analyze mistakes", "Motivate teammates"], scores: [0, 1, 2, 3] },
    { question: "What is your priority in a game?", choices: ["Scoring", "Shooting", "Defense", "Athleticism"], scores: [0, 1, 2, 3] },
    { question: "How do you handle criticism?", choices: ["Stay focused", "Prove them wrong", "Use it to improve", "Ignore it"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite part of the game?", choices: ["Scoring", "Shooting threes", "Defense", "Dunking"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a slump?", choices: ["Keep shooting", "Change strategy", "Focus on defense", "Stay positive"], scores: [0, 1, 2, 3] },
    { question: "What is your goal for the season?", choices: ["Score more points", "Make more threes", "Improve defense", "Enhance athleticism"], scores: [0, 1, 2, 3] },
    { question: "How do you react to a bad call?", choices: ["Stay calm", "Protest respectfully", "Use it as motivation", "Ignore it"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to training?", choices: ["Work on mid-range shots", "Practice threes", "Focus on defense", "Improve athleticism"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a tough opponent?", choices: ["Play your game", "Shoot more threes", "Focus on defense", "Use athleticism"], scores: [0, 1, 2, 3] },
    { question: "What is your mindset during a game?", choices: ["Stay focused", "Stay confident", "Stay aggressive", "Stay calm"], scores: [0, 1, 2, 3] },
    { question: "What do you do after a loss?", choices: ["Analyze the game", "Practice more", "Stay positive", "Motivate teammates"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to teamwork?", choices: ["Lead by example", "Encourage shooting", "Focus on defense", "Bring energy"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a big game?", choices: ["Stay focused", "Stay confident", "Stay aggressive", "Stay calm"], scores: [0, 1, 2, 3] },
    { question: "What is your reaction to a win?", choices: ["Stay humble", "Celebrate with teammates", "Analyze the game", "Plan for the next game"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite drill?", choices: ["Shooting", "Three-point shooting", "Defensive drills", "Athletic drills"], scores: [0, 1, 2, 3] },
    { question: "How do you handle trash talk?", choices: ["Stay focused", "Respond with performance", "Ignore it", "Use it as motivation"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to diet?", choices: ["Balanced diet", "High protein", "Low carb", "High carb"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to rest?", choices: ["Get enough sleep", "Take naps", "Stay active", "Rest when needed"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to injury?", choices: ["Prevent injuries", "Recover quickly", "Stay positive", "Work around it"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite aspect of basketball?", choices: ["Scoring", "Shooting threes", "Defense", "Athleticism"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a good game?", choices: ["Stay humble", "Celebrate with teammates", "Analyze the game", "Plan for the next game"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to fans?", choices: ["Stay humble", "Engage with fans", "Respect fans", "Ignore distractions"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite time of the game?", choices: ["First quarter", "Second quarter", "Third quarter", "Fourth quarter"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to practice?", choices: ["Work on weaknesses", "Improve strengths", "Stay consistent", "Stay motivated"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a trade?", choices: ["Stay positive", "Prove yourself", "Adapt quickly", "Stay focused"], scores: [0, 1, 2, 3] },
    { question: "What is your reaction to a new coach?", choices: ["Adapt quickly", "Stay positive", "Prove yourself", "Stay focused"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to team chemistry?", choices: ["Build trust", "Encourage communication", "Focus on teamwork", "Stay positive"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite position?", choices: ["Guard", "Forward", "Center", "Utility"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to game strategy?", choices: ["Follow coach's plan", "Adapt quickly", "Stay focused", "Use strengths"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a tough loss?", choices: ["Stay positive", "Analyze mistakes", "Work harder", "Stay motivated"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to team meetings?", choices: ["Stay focused", "Contribute ideas", "Listen actively", "Stay positive"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to media?", choices: ["Stay humble", "Engage with media", "Respect media", "Ignore distractions"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to social media?", choices: ["Stay positive", "Engage with fans", "Respect others", "Ignore negativity"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite aspect of the game?", choices: ["Scoring", "Shooting threes", "Defense", "Athleticism"], scores: [0, 1, 2, 3] },
    { question: "How do you handle a big moment?", choices: ["Stay calm", "Stay focused", "Stay confident", "Stay positive"], scores: [0, 1, 2, 3] },
    { question: "What is your approach to leadership?", choices: ["Lead by example", "Encourage others", "Stay positive", "Stay focused"], scores: [0, 1, 2, 3] },
    { question: "What is your favorite aspect of the team?", choices: ["Chemistry", "Communication", "Teamwork", "Positivity"], scores: [0, 1, 2, 3] },
];

const players = [
    { name: "DeMar DeRozan", description: "Your player is DeMar DeRozan. You have a Prime Ability for scoring in the mid-range. You have smooth footwork and the ability to create space to get high-percentage shots off in the mid-range area.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeN8YS10yYogoHTXIV05xoRu89s-Sp97uYXQ&s" },
    { name: "Stephen Curry", description: "Your player is Stephen Curry. You have an exceptional ability to shoot three-pointers from anywhere on the court. Your shooting range and accuracy are unmatched.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYWyiZuoRpe3PLRbC_s50GIVOz_C9Q7c4uA&s" },
    { name: "Dante Exum", description: "Your player is Dante Exum. You are known for your speed and defensive capabilities. You have the agility to guard multiple positions and disrupt the opponent's offense.", image: "https://media.nbcdfw.com/2024/10/USATSI_23408229.jpg?quality=85&strip=all&resize=1200%2C675" },
    { name: "LeBron James", description: "Your player is LeBron James. You are a versatile player with the ability to impact the game in many ways. Your leadership, athleticism, and basketball IQ are your strongest assets.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgx6iWjvyLBjUSpthfrUhtzoxKxOGHj1U0A&s" },
    { name: "Keegan Murray", description: "Your player is Keegan Murray. You excel in your ability to play both forward positions, showcasing versatility and a high basketball IQ. You have a knack for making smart plays and contributing on both ends of the court.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4l-wN9nQCG8i4-P469gbKhwCZHffAqCwGw&s" },
    { name: "Devin Booker", description: "Your player is Devin Booker. You are a prolific scorer with the ability to create your own shot. You have a natural scoring instinct and can take over games with your offensive firepower.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhKEBtsQ4qMw7FRmXmSMMclNr8cW-PMI4qQ&s" },
    { name: "Kawhi Leonard", description: "Your player is Kawhi Leonard. You are known for your defensive prowess and ability to score efficiently. You have a calm demeanor and excel in clutch situations.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx73daYU9bAySwPF2Um8cMvFHtT2QBrWOVw&s" },
];

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const quizQuestions = document.getElementById('quiz-questions');
    const resultDiv = document.getElementById('result');
    const playerImage = document.getElementById('player-image');
    const playerDescription = document.getElementById('player-description');

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionTitle);

        question.choices.forEach((choice, choiceIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = question.scores[choiceIndex];
            label.appendChild(input);
            label.appendChild(document.createTextNode(choice));
            questionDiv.appendChild(label);
        });

        quizQuestions.appendChild(questionDiv);
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(quizForm);
        let totalScore = 0;

        for (let pair of formData.entries()) {
            totalScore += parseInt(pair[1]);
        }

        const playerIndex = Math.floor(totalScore / questions.length);
        const player = players[playerIndex];

        playerImage.src = player.image;
        playerDescription.textContent = player.description;
        resultDiv.classList.remove('hidden');
    });
});
