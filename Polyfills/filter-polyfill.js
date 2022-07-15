let arr = [1, 2, 3, 7, 4, 5, 6];

let filterArr = arr.filter(function(value,index,array){
    return value>3
})

console.log(filterArr)


Array.prototype.filterPoly = function(callback){
    let tempArr = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            tempArr.push(this[i])
        }
    }

    return tempArr
}

let filterArr2 = arr.filterPoly(function(value,index,array){
    return value>3
})

console.log(filterArr2)