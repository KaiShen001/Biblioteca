function openChat() {
    document.getElementById('chat-container').style.display = 'block';
}

function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        const userMessage = document.getElementById('user-message').value;
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML += '<div><strong>Tú:</strong> ' + userMessage + '</div>';
        document.getElementById('user-message').value = '';

        // Aquí puedes agregar lógica para enviar el mensaje al chatbot y recibir una respuesta.
        // Puedes utilizar llamadas AJAX o fetch para comunicarte con un servidor o un servicio de chatbot.

        // Ejemplo de respuesta del chatbot:
        const botResponse = 'Hola, soy un chatbot. ¿En qué puedo ayudarte?';
        chatMessages.innerHTML += '<div><strong>Chatbot:</strong> ' + botResponse + '</div';
    }
}

// Abre el chat al cargar la página (puedes cambiar esto según tus preferencias)
openChat();
