/**Bài 1:
Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng
-	Input: Cho cân nặng, chiều cao của 2 người
-	Output: 
+ Tính BMI của từng người
+ Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì
Data test:
+ Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m 
+ Data 2: Marry nặng 95 kg và cao 1.88 m. Harry nặng 85 kg và cao 1.76 m */

var obj = [
    {
        name: 'Marks',
        mass: 78,
        height: 1.69,
    },
    {
        name: 'John',
        mass: 92,
        height: 1.95
    }
]

var str = obj.map(function(eLm) {
    return eLm.mass / (eLm.height * eLm.height)
    
}) 
if( str[0] > str[1]) {
    console.log(obj[0].name + ' BIM nặng hơn '+ obj[1].name)
}else (
    console.log(obj[1].name + ' BIM nặng hơn '+ obj[0].name)
)


var strone = 'tên ' + obj[0].name + 'BMI ' + str[0] ;
var strtwo = 'tên ' + obj[1].name + 'BMI ' + str[1] ;
console.log(strone)
console.log(strtwo)
