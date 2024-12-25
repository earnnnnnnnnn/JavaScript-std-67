        // //forEach()
        // const number = [1,2,3,4,5];
        // number.forEach(function(number){
        //     console.log(number)
        // })

        //map()
        // const number = [1,2,3,4,5];
        // const doubled = number.map(function(number){
        //     return number * 2;
        // })
        // console.log(doubled);

        //filter()
        // const number = [1,2,3,4,5];
        // const even = number.filter(function(number){
        //     return number % 2 === 0 ;
        // })
        // console.log(even);

        //reduce()
        // const number = [1,2,3,4,5];
        // const sum = number.reduce(function(total , number){
        //     console.log(total , number)
        //     // 0+1 = 1
        //     // 1+2 = 3
        //     // 3+3 = 6
        //     // 6+4 = 10
        //     // 10+5 = 15
        //     return total + number;
        // }, 0);


        // //some()  แสดงค่าtrue / false เมื่อถูกแค่ 1 ก็เป็น True ได้
        // const number = [1,2,3,4,5];
        // const hasEven = number.some(function(number){
        //     return number % 2 === 0;
        // });
        // console.log(hasEven);

        // //every() เช็คค่าทุกตัว แสดงค่าtrue กับ false เมื่อ จะเป็น true ได้ต้องถูกทั้งหมูก่อน
        // const number = [1,2,3,4,5];
        // const allPositive = number.every(function(number){
        //     return number > 0;
        // });
        // console.log(allPositive);

        // //find() ตัวแรกที่หาเจอ เมื่อทำคำสั่ง
        // const number = [1,2,3,4,5];
        // const firstEven = number.find(function(number){
        //     return number % 2 === 0;
        //     console.log
        // });
        // console.log(firstEven); // 2

        //findindex() 
        //- return ค่า index ของ element ตัวแรกใน array ที่ตรงกับฟังก์ชันการทดสอบที่ให้มา
        //- หากไม่มีelement ใดตรงตามเงื่อนไข่ ก็จะ return ค่า -1
        const number = [1,2,3,4,5];
        const firstEvenIndex = number.findIndex(function(number){
            return number % 2 === 0; 
            console.log
        });
        console.log(firstEvenIndex); // index ที่ 1 นั้นก็คือเลข 2