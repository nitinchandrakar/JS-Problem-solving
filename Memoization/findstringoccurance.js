
function stringCount(){
    let count = 0;
    return function getCount(str1, str2){

        const index = str1.indexOf(str2);
        if(index==-1){
            return count;
        }else{
            count++;
            return getCount(str1.slice(str2.length+index), str2)
        }
    
    }
}


console.log(stringCount()('timeaaaatimaaaatimaaaaatim','tim'))