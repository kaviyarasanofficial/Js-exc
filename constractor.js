class say{

    // constructor(){
    //     document.write("hi");
    // }
    constructor(name){
        this.name1 = name;
    }
        in() {
        document.write("hi" + this.name1);
        }
    
}

var s=new say("Kavi");


s.in()