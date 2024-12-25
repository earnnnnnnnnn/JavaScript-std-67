var x = 10;
let y = 20;
const z = 30;

{
    //Block Scope
    let name = "John Doe";
    console.log(name)
}

function localFunc() {
    //Local Scope
    let carName = " earn ";
    console.log(carName);
}
localFunc();

function myfunction() {
    var fristName =  "John"; //Function Scpoe
    let lastNeme = "Doe"; //Function Scpoe
    const age = 30; //Function Scpoe

    console.log(fristName);
    console.log(lastNeme);
    console.log(age);
    console.log(x);
    console.log(y);
    console.log(z);

}
//ต้องมีการเรียกฟังก์ชันด้วยไม่งั้น console.log ออกมาจะไม่เห็นอะไร
myfunction();