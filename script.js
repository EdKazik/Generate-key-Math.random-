function generateKey(length, elem) {
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomPoz = Math.floor(Math.random() * characters.length);
        randomString += characters.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);