import supabase from '../config/configuration.js';

const insertApi = async (title , array) =>{
    try{
    const {data , error} = await supabase.from(title).insert(array).select();
    if(data){
        return true;
    }
    else{
        console.error(error);
        return null;
    }
}
catch(err){
    console.error(err);
    return false;
}
}

const selectApi = async () =>{

}

const MODULE = {
    insertApi , selectApi
}

export default MODULE;