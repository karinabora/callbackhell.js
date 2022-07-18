// Asynchronous JavaScript, or JavaScript that uses callbacks

const getRoll=()=>{
    setTimeout(()=>{
        console.log('API getting roll no.');
        let room_no=[1,2,3,4,5];
        console.log(room_no);
        setTimeout(()=>{
            var biodata={
                name:"v",
                age:26
            }
            setTimeout(()=>{
                var biodata={
                    gender:"male"
                }
                console.log(`My name is ${biodata.name} and I am ${biodata.age} years old gender is ${biodata.gender}`);
            })
        },2000)
    },2000)
}
getRoll() 

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function a(){
    setTimeout(()=>{
        b=[1,2,3,4,5]
        console.log(b);
    setTimeout(()=>{
       var biodata={
           name:1,
           m:4
       }
       setTimeout(()=>{
           biodata={
               c:4
           }
           console.log(`${b} is Array but biodata is dictionary${biodata.m,biodata.c} `);
       },5000)
    },2000)
    },10000)
}
a()


