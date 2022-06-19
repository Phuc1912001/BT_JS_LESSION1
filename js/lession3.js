var obj = [
    {
        name:'Dolphins',
        a: 96,
        b: 108,
        c: 89
    },
    {
        name:'Koalas',
        a: 88,
        b: 91,
        c: 110
    }
]
//console.log(obj)
var str = obj.map(function(eLm) {
    return (eLm.a + eLm.b + eLm.c )/3
})

var Dolphins = ' diem trung bình của đội ' + obj[0].name +' '+ str[0];
var Koalas = ' diem trung bình của đội ' + obj[1].name +' '+ str[1];
console.log(Dolphins)
console.log(Koalas)

if( str[0] > str[1]) {
    console.log(obj[0].name + 'là đội chiến thắng ' )
}else {
    console.log(obj[1].name + 'là đội chiến thắng ' )
}
