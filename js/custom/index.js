var target = document.getElementById('joke-target');
var titles = [
    'Если бы вы были с нами, то это был бы не отель, а хохотель.',
    'Коктейль с хламидиями.',
    'И не надо слов, не надо паники, поедем мы в Стокгольм на Титанике.',
    'Хорошо, когда есть зять, у которого есть, что взять.',
    'Эх хвост, чешуя, не поймал я ни..я.Го. На на.. На',
    'Лухари, озерный бриз - это просто зашибись.',
    'Коку любят не только люди!!!',
    'В Америку улетает Зять, хочу ему счасливого пути я пожелать, а он отвечает да она уже достала меня б.. дь, мне бы только командировочные забрать',
    'Моя смотрит не как туча,\n потому что мы играем в буча',
    'Отель VIP: хочешь пей, хочешь жри))',
    'Что-то Рига не зашла, посмотрим, как выйдет.',
    'Тост будет невелик, скажу вам просто: «зажарился хорошо шашлык».',
    'Я не буду стоять за дротам.',
    'Вся экскурсия проходит плодотворно, а не какая-нибудь вата на фоне заката.',
    'Я пошел за селфи-палкой, я пошел-пошел, а палку не нашел.'

];
let index = 0;
target.innerText = titles[index];
console.log(index,titles[index])

function newTitle () {
    // var i = (Math.random() * titles.length) | 0;
    index = index < 14 ? index + 1 : 0;
    console.log(index,titles[index])
    target.innerText = titles[index];
}

// newTitle();