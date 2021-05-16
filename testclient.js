import Http from 'http';
const url = 'mus-market.herokuapp.com';
let options = {
    hostname: url,
    path: '/func',
    headers: {
        command: 'sum_for_period',
        arg1: '1',
        arg2: '0001/11/11',
        arg3: '9999/12/11',
        arg4: '1111/11/11',
        arg5: '1111/11/12',
        arg6: 'Santa Claus'
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
