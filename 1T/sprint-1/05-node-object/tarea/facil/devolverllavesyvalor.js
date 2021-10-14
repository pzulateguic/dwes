
function devolverllavesyvalor(obj) {
	
    return [Object.keys(obj), Object.values(obj)];

}

console.log(devolverllavesyvalor({ a: "Apple", b: "Microsoft", c: "Google" }));