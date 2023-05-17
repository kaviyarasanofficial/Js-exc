//Convert Doller Program 
let converDoller= (doller) =>{

    if(typeof doller === 'number'){
    return doller * 82
    
    }else{
        throw Error("Only Enter Numbers")
    }
    }
    

    document.write(converDoller(100),"\nIndian Rupee");
    
    document.write("thanks for visting")
    