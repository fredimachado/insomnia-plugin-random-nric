// Original code from https://gist.github.com/eddiemoore/7131781
// Modified by Matt Hosking (https://github.com/mattjhosking)
const generateNric = function() {
    const str =
        'S' + (Math.floor(Math.random() * 8_999_999) + 1_000_000).toString();
  
    let weight = 0;
    weight += Number.parseInt(str[1], 10) * 2;
    weight += Number.parseInt(str[2], 10) * 7;
    weight += Number.parseInt(str[3], 10) * 6;
    weight += Number.parseInt(str[4], 10) * 5;
    weight += Number.parseInt(str[5], 10) * 4;
    weight += Number.parseInt(str[6], 10) * 3;
    weight += Number.parseInt(str[7], 10) * 2;

    const temp = weight % 11;
    const st = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    return str + st[temp];
};

module.exports.templateTags = [{
    name: 'random_nric',
    displayName: 'Random NRIC',
    description: 'Generates a random NRIC',
    run(_) {
        return generateNric();
    }
}];
