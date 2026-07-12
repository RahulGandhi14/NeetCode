function isPalindrome(s: string) {
	const isDigit = (charCode: number) => charCode >= 48 && charCode <= 57
	const isAlpha = (charCode: number) => charCode >= 97 && charCode <= 122
	const isAlphanumeric = (charCode: number) => isDigit(charCode) || isAlpha(charCode)

	let front = 0;
	let rear = s.length - 1;

	while (rear > front) {
		let frontCharCode = s[front].toLowerCase().charCodeAt(0)
		let rearCharCode = s[rear].toLowerCase().charCodeAt(0)

		while (!isAlphanumeric(frontCharCode) && front < rear) {
			front++
			frontCharCode = s[front].toLowerCase().charCodeAt(0)
		}
		while (!isAlphanumeric(rearCharCode) && rear > front) {
			rear--
			rearCharCode = s[rear].toLowerCase().charCodeAt(0)
		}

		if (frontCharCode !== rearCharCode) return false;
		front++;
		rear--;
	}

	return true;
}

console.log(
	"--> Was it a car or a cat I saw?:",
	isPalindrome("Was it a car or a cat I saw?"),
);
console.log("--> tab a cat:", isPalindrome("tab a cat"));
console.log("--> .,:", isPalindrome(".,"));