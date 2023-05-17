//Convert Doller Program 
let converDoller= (doller) =>{

    if(typeof doller === 'number'){
    return doller * 82
    
    }else{
        throw Error("Only Enter Numbers")
    }

    }
    
    try {
        document.write(converDoller("m"),"\nIndian Rupee");
    } catch (error) {
        console.log(error);
    }
    
    
    console.log("thanks for visting")
    