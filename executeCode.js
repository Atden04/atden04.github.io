function execute() {
	const codeArr = document.getElementsByTagName("textarea");
	let code = "";
	for (const el of codeArr) {
		code += el.value;
	}
	eval(code);
}
