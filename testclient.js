import Http from 'http';
const url = 'mus-market.herokuapp.com';
let options = {
    hostname: url,
    path: '/func',
    headers: {
        command: 'add_category',
        arg1: '2',
        arg2: 'Drums',
        arg3: '1234/12/30'
    }
};
Http.get(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
