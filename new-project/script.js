let lang = 'ru';
let langs = 'ru';
let lan = 'en';
let week;
let arr;
let day;

//через if
if (lang == 'ru') {
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} else if (lang == 'en') { 
    week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
}

//через switch-case
switch (langs) {
	case 'ru':
		arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	break;
	case 'en':
		arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	break;
}

//через многомерный массив без ифов и switch
const days = {
	'ru':['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

console.log(week);
console.log(week[1]);
console.log(arr);
console.log(arr[2]);
console.log(days[lan]);
console.log(days[lan][3]);

let namePerson = 'Алина';
let director = 'Артем';
let ticher = 'Александр';

namePerson == 'Артем' ? console.log('Директор') : '' || namePerson == 'Александр' ? console.log('Учитель') : console.log('Студент');