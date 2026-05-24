document.getElementById('submitBtn').addEventListener('click', function()
{
    const form = document.getElementById('quizForm');
    const userName = document.getElementById('userName').value;
    const userClass = document.getElementById('userClass').value;
    const totalQuestions = 10;
    let score = 0;
    for(let i = 1; i <= totalQuestions; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === 'correct') {
            score++;
        }
    }
    alert(`${userName}, ${userClass}: правильных ответов ${score} из ${totalQuestions}`);
}
)