import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function () {
    liff
        .init({ liffId: process.env.LIFF_ID })
        .then(() => {
            console.log('LIFF init success');

            document.getElementById('sendMessage').addEventListener('click', function () {
                liff.sendMessages([
                    {
                        type: 'text',
                        text: 'Hello, World!'
                    }
                ])
                    .then(() => {
                        console.log('message sent');
                    })
                    .catch((err) => {
                        console.log('error', err);
                    });
            });
        })
        .catch((error) => {
            console.log(error)
        })
});
