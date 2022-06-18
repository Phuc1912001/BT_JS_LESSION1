var array = [ 
    {
        a: 78,
        b: 97,
        chuongtrinh:function() {
            console.log('kết quả của ' + (this.a + this.b));
        },
    },
    {
        a: 87,
        b: -99,
        chuongtrinh:function() {
            console.log('kết quả của ' + (this.a - this.b));
        },
    },
    {
        a: 679,
        b: 5,
        chuongtrinh:function() {
            console.log('kết quả của ' + this.a * this.b);
        },
    },
    {
        a: 54,
        b: 5,
        chuongtrinh:function() {
            console.log('kết quả của ' + this.a / this.b);
        },
    },
    {
        a: 223,
        b: 78,
        chuongtrinh:function() {
            console.log('kết quả của ' + this.a % this.b);
        }
    },
]
for( var i = 0; i < array.length ;i++ )   {
    array[i].chuongtrinh();
}