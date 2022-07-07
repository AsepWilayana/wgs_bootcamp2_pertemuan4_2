var validator = require('validator');
const readline = require('readline');

// console.log(validator.isEmail('foo@bar.com')); //=> true
// console.log(validator.isMobilePhone('083808682474', 'id-ID')); //=> true

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



// cara mebuat pertanyaan
rl.question('what is your name?', (name) => {
    rl.question('what is your email?', (email) => {
        validemail = validator.isEmail(email)
        if(validemail === true){
            rl.question('what is your Nomor Telepon?', (nomor_tlp) => {
                validntlp = validator.isMobilePhone(nomor_tlp, 'id-ID')
                if(validntlp === true){
                    console.log(`Nama : ${name}`);
                    console.log(`Email : ${email}`);
                    console.log(`Nomor Telepon : ${nomor_tlp}`);
                    return rl.close();
                }else{
                    console.log(`Nama : ${name}`);
                    console.log(`Email : ${email}`);
                    console.log(`Nomor Telepon salah format`);
                    return rl.close();
                }
            });
        }else {
            console.log(`Nama : ${name}`);
            console.log('email salah');
            return rl.close();
    }
    });
});