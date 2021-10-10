const messages = [
    'Oscar',
    'Ana',
    'Nicolay',
    'Yesica',
    'Diego',
    'Laura',
    'David',
    'Alexa',
    'Atenea',
    'Carlos'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };