function insertionSort(array){
    for(let i =1;i<array.length;i++){
        if(array[0]>array[i]){
            array.unshift(array.splice(i,1)[0]);
        } else {
            for(let j=1 ; j<i ; j++){
                if((array[i] > array[j-1] || array[i] === array[j-1]) && array[i] < array[j]){
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
}

const myarray = [6,4,7,2,9,3,1,2,66,0];
insertionSort(myarray)
console.log(myarray)