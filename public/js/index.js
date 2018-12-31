var socket = io();

/* The arrow function works in Chrome, but it
will fail on mobile phone, Internet Explorer, 
Safari, or some versions of Firefox.

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});
*/

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Yup, that works for me.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});
