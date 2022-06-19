var array = [
    {
        name:'Phúc',
        score: 60,
        rank: 'C',
        classification:function() {
            console.log(array[0].name +' xếp loại '+ array[0].rank)
        }
    },
    {
        name:'huy',
        score: 70,
        rank: 'B',
        classification:function() {
            console.log(array[1].name +' xếp loại '+ array[1].rank)
        }
    },
    {
        name:'Tuyết',
        score: 90,
        rank: 'A',
        classification:function() {
            console.log(array[2].name +' xếp loại '+ array[2].rank)
        }
    },
    {
        name:'Nga',
        score: 70,
        rank: 'B',
        classification:function() {
            console.log(array[3].name +' xếp loại '+ array[3].rank)
        }
    },
    {
        name:'Liễu',
        score: 90,
        rank: 'A',
        classification:function() {
            console.log(array[4].name +' xếp loại '+ array[4].rank)
        }
    },
    {
        name:'Lan',
        score: 60,
        rank: 'C',
        classification:function() {
            console.log(array[5].name +' xếp loại '+ array[5].rank)
        }
    },
    {
        name:'Thành',
        score: 50,
        rank: 'D',
        classification:function() {
            console.log(array[6].name +' xếp loại '+ array[6].rank)
        }
    },
]

for ( i = 0 ; i < array.length; i++) {
    array[i].classification();
}