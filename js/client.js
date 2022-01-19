
const socket = io("https://localhost:8000");

const form = document.getElementById('send');
const messageInput = document.getElementById('sendip');
const messageContainer = document.querySelector('.container');


const name = prompt('Enter your name ');