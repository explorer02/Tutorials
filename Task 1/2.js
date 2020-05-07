function replaceImages() {
	const images = document.body.getElementsByTagName('img');
	for (let i = images.length - 1; i >= 0; i--) {
		let img = images[i];
		if (img.alt) {
			img.parentNode.replaceChild(document.createTextNode(img.alt), img);
		}
	}
}
// replaceImages();

// function find(node, string) {
// 	if (node.nodeType === Node.ELEMENT_NODE) {
// 		// console.log(node);
// 		for (let i = 0; i < node.childNodes.length; i++) {
// 			find(node.childNodes[i], string);
// 		}
// 	} else if (node.nodeType == Node.TEXT_NODE) {
// 		if (node.nodeValue.toLowerCase().indexOf(string) >= 0) {
// 			console.log(node.nodeValue);
// 		}
// 	}
// }
// find(document.getElementsByTagName('html')[0], 'world');
