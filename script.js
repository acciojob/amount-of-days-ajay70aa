//your JS code here. If required.
const outputElem = document.querySelector('.output')

function daysOfAYear (year){
	if(year%4===0 && year%100!==0 || year%400==0){
		return 366
	} else {
		return 365
	}
}
document.querySelector('.output').innerHTML = daysOfAYear(2024)
