const operaciones = {
    suma: (a,b) => a+b,
    resta: (a,b) => a-b,
    mult: (a,b) => a*b,
    div: (a,b) => a/b,
    undefined: () => 1,

}

const key = 'asdf';
console.log(operaciones[key](7,3));