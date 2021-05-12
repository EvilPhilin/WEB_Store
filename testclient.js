import Http from 'http';
const url = 'mus-market.herokuapp.com';
let options = {
    hostname: url,
    path: '/func',
    headers: {
        command: 'sum_for_period',
        arg1: '1',
        arg2: '0000/01/01',
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
