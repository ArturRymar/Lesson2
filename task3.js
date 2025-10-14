//example with for

let multTableByNumberVersion1 = (number) => {
   let tableRows=[];
   for (let i=1; i<=10; i++) {
   tableRows.push(`${number} x ${i} = ${number*i}`);
    }
    return tableRows.join('\n');
}

console.log(multTableByNumberVersion1(5));

//example with while
let multTableByNumberVersion2 = (number) => {
   let tableRows=[];
   let counter=1;
   while (counter<=10) {
   tableRows.push(`${number} x ${counter} = ${number*counter}`);
   counter++;
    }
    return tableRows.join('\n');
}

console.log(multTableByNumberVersion2(5));