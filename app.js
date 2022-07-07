var validator = require("validator");
const readline = require("readline");
// console.log(validator.isEmail('foo@bar.com')); //=> true
// console.log(validator.isMobilePhone('083808682474', 'id-ID')); //=> true

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nama, emails;

var quest_email = function () {
  rl.question("what is your email?", (email) => {
    validemail = validator.isEmail(email);
    if (validemail === true) {
      emails = email;
      quest_nomortelepon();
    } else {
      quest_email();
    }
  });
};

var quest_nomortelepon = function () {
  rl.question("what is your Nomor Telepon?", (nomor_tlp) => {
    validntlp = validator.isMobilePhone(nomor_tlp, "id-ID");
    if (validntlp === true) {
      console.log(`Nama : ${nama}`);
      console.log(`Email : ${emails}`);
      console.log(`Nomor Telepon : ${nomor_tlp}`);
      return rl.close();
    } else {
      quest_nomortelepon();
    }
  });
};

// cara mebuat pertanyaan
rl.question("what is your name?", (name) => {
  nama = name;
  quest_email();
});
