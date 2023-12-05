var name = prompt("Adin nedi ?");
var length = "";
for (let i = 0; i < name.length; i++) {
    if (i === 0) {
        length += name[i].toUpperCase();
    } else{
        length += name[i].toLowerCase();
    }
}
console.log(length);
