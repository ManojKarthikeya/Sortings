function selectionSort(array){
    for(let i=0;i<array.length;i++){
        let min = i;
        for(let j=i+1;j<array.length;j++){
            if(array[min] > array[j]){
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
}

const array = [2,15,123,22,11,88,3];
selectionSort(array)
console.log(array)