import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
        liff.sendMessages([
            {
                type: 'text',
                text: 'Hello, World!',
            },
        ])
            .then(() => {
                window.alert('Message sent');
            })
            .catch((error) => {
                window.alert(`Error sending message: ${error}`);
            });
    })
    .catch((error) => {
        console.log(error)
    })
});
