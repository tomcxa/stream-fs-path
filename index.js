import fs from 'node:fs/promises'
import inquirer from 'inquirer';

const choices = ['Орёл', 'Решка']
const QUESTION_NAME = 'question'

const getRandomAnswer = () => {
    const index = Math.round(Math.random())

    return choices.at(index)
}

const logToFile = (answer) => {
    fs.appendFile('log.txt', `${JSON.stringify(answer)}\n`)
}

inquirer
  .prompt([
    {
        name: QUESTION_NAME,
        message: 'Орёл или решка?',
        type: 'list',
        choices, 
    }
  ])
  .then((answers) => {
    const rightAnswer = getRandomAnswer()
    const userAnswer = answers[QUESTION_NAME]
    const isWin = rightAnswer === userAnswer

    logToFile({
        condition: isWin ? 'win' : 'lose',
        userAnswer,
        rightAnswer,
    })
        
    console.log(isWin ?'Гля, угадал!' : 'Не повезло');
  })
  .catch((error) => {
    console.error('Какая-то ошибка выглядит так: ', error)
  });