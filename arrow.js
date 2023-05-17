//Arrow Function Using Print Object Values in Inside of Array


var arr=[{
    title:"Mens Clotings",
    start:200,
    isDone: true
},

{

    title:"Mens Watch",
    start:100,
    isDone: true
},

{

    title:"Headsets",
    start:100,
    isDone: true

}];



arr.push({
    title:'women cloting',
    start: 200,
    isDone: false
});



let result=arr.filter((tode) => {
   //document.write(tode.title, " Price Start With ",tode.start); 
   return arr.isDone === true;
})   

document.write(result);



