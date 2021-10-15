function invert(o) {
	
    const inv = {};
    for (let key in o) {
        inv[o[key]] = key;
    }
    return inv;

}

console.log(invert({ "zebra": "koala", "horse": "camel" }));