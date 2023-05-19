class say{

    // constructor(){
    //     document.write("hi");
    // } 
    // constructor(name){
    //     this.name1 = name;
    // }
    //     in() {
    //     document.write("hi" + this.name1);
    //     }
    constructor(a,b){
        this.name1 = a;
        this.name2= b;
        }
        out() {
        document.write("hi" + this.name1 +this.name2);
        }
    
}

var s=new say("Kavi" , "Siva");


s.out()