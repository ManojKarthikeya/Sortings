function bubbleSort(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

const array = [2,15,123,22,11,88,3];
bubbleSort(array)
console.log(array)