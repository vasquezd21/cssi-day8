const messagesRef = firebase.database().ref();

document.querySelector("#sendMessage").addEventListener('click',(e) =>{
    const message = document.querySelector("#message").value;
    const passcode = document.querySelector("#passcode").value;
    messagesRef.push({
        message:message,
        passcode:passcode
    });
});