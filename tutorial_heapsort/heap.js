/*|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\

    Heap Sort Stencil | JavaScript support functions

    Quick JavaScript Code-by-Example Tutorial 
     
    @author ohseejay / https://github.com/ohseejay
                     / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Michigan Honor License 

|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/*/


// create empty object 
minheaper = {}; 
// swaps two elements in an array. Don't do any check 
function swap(arr,first,second){
    if(first == second){
        return;
    }
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}
// define insert function for min binary heap
function minheap_insert(heap, new_element) {
    var length = heap.push(new_element);
    var child = length - 1;
    var parent = (child + child%2)/2 - 1;
    while(parent >= 0 && heap[child] < heap[parent]){
        swap(heap,parent,child);
        child = parent;
        parent = (child + child%2)/2 - 1;
    }
    // STENCIL: implement your min binary heap insert operation
}

// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign 
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
    swap(heap,0,heap.length - 1);
    var to_pop = heap.pop();
    var parent = 0;
    var child = parent * 2 + 1;
    while(child < heap.length){
        if(child + 1 < heap.length && heap[child] > heap[child + 1]){
            child = child + 1;
        }
        if(heap[child] < heap[parent]){
            swap(heap,child,parent);
            parent = child;
            child = parent * 2 + 1; 
        }
        else{
            break;
        }
    }
    return to_pop;
    // STENCIL: implement your min binary heap extract operation
}

minheaper.extract = minheap_extract;
// assign extract function within minheaper object

    // STENCIL: ensure extract method is within minheaper object






