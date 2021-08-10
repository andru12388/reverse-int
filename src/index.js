module.exports = function reverse (n) {
	let str = n.toString();
	let len = str.length
	let i = 0;
	let sum = '';
	if (n < 0) {
		while (i <= len - 1) {
		sum += str[str.length - i];
		i++;
		}
	}
	else {
		while (i <= len) {
		sum += str[str.length - i];
		i++;
		}
	}
	
	let substring = sum.slice(9);
	let reversed = Number(substring);
	return reversed;
};