/**Bài 2: Giải phương trình bậc 1:
-	Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)
-	Output: Tìm x
Data test:
+ Data 1: -2x – 9 = -3
+ Data 2: 5x + 7 = 9
 */
/**const a =prompt('nhập a: ');
const b =prompt('nhập b: ');
const c =prompt('nhập c: ');

const x = (c - b)/a 
alert('x là ' + x)*/



var array = [
    {
      a: -2,
      b: -9,
      c: -3,
      phuongtrinh: function () {
        console.log(
          "Ket qua phuong trinh 1 co nghiem x= " + (this.c - this.b) / this.a
        );
      },
    },
    {
      a: 5,
      b: 7,
      c: 9,
      phuongtrinh: function () {
        console.log(
          "Ket qua phuong trinh 2 co nghiem x= " + (this.c - this.b) / this.a
        );
      },
    },
  ];
  
  for (var i = 0; i < array.length; i++) {
      array[i].phuongtrinh()
  }