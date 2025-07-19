import fs from "fs";
import chalk from "chalk";

sumFromFile('sum-from-file/sum-from-file.txt')
    .then(sum => console.log(chalk.bgGreen('Sum:'), sum))
    .catch(err => console.log(chalk.bgRed('Cannot sum:'), err))



function sumFromFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, content) => {
            if (err) {
                reject(err)
            } else {
                const sum = content.split('\n').reduce((acc, num) => acc + Number(num), 0)
                resolve(sum)
            }
        })
    })
}

