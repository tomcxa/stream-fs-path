import fs from 'node:fs/promises'

const printLogAlalize = (data = '') => {
    /**
    * @type {Array.<{condition: 'win' | 'lose', userAnswer: string, rightAnswer: string}>}
    */
    const result = data.split('\n').filter(Boolean).map((value) => JSON.parse(value))
    const gamesCount = result.length
    const gamesWinCount = result.filter(({ condition }) => condition === 'win').length
    const gamesLostCount = gamesCount - gamesWinCount
    const winRate = (gamesWinCount / gamesCount) * 100

    console.table({'Кол-во партий': gamesCount, 'Кол-во выигранных/проигранных партий': `${gamesWinCount}/${gamesLostCount}`, 'Выигранных партий, %': winRate})
}

fs.readFile('log.txt', {encoding: 'utf-8'}).then(data => {
    printLogAlalize(data);
})
