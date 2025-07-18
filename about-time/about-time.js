import fs from 'fs';
import ms from 'ms';
import chalk from 'chalk';

const timesTxt = fs.readFileSync('about-time/about-time.txt', 'utf8')

printGreen(getConvertedTimes(timesTxt))

function getConvertedTimes(txt) {
    const times = txt.split('\n')

    return times.map(time => ms(+time, { long: true }))
}

function printGreen(content) {
    console.log(chalk.red.bgGreen(content));
}



