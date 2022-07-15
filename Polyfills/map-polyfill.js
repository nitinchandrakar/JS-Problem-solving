let arr = [1, 2, 3, 7, 4, 5, 6];

let mapOut = arr.map(function(value,index,array){
    return value*2;
})


Array.prototype.mapPoly = function(callback){
    let modArr =[]
    for(let i=0;i<this.length;i++){
        modArr.push(callback(this[i],i,this));
    }

    return modArr;
}

let myMap = arr.mapPoly(function(value){
    return value*2;
})

console.log(myMap)