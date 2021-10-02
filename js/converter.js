// converter png to webp
// init npm and/or install package "npm i -D webp-converter"

const fs= require('fs');
const path = require('path');
const webp = require('webp-converter');

const dir = path.join(__dirname, '../img');

fs.readdirSync(dir).forEach(file => {

    if(file.match('.png')){

        const fileName = file.substring(0, file.length - 4)
        
        const result = webp.cwebp(`${dir}/${fileName}.png`, `${dir}/webp/${fileName}_converted.webp`, "-q 80", logging="-v");
        
        result.then((response) => {
            console.log(response);
        });
    }
});
