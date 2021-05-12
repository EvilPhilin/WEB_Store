import Http from 'http';
const url = 'mus-market.herokuapp.com';
let options = {
    hostname: url,
    path: '/func',
    headers: {
        test1: 'Test1',
        test2: 'Test2'
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
