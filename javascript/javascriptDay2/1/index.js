const age = Number(prompt('give age: '));

if (age >= 18) {
    document.write('welcome');

    const remains = 18 - age;

    if  (remains <= 3) {
        document.write('almost there');
    } else if (remains <= 6) {
        document.write('wait');
    } else {
        document.write('no!');
    }
}
