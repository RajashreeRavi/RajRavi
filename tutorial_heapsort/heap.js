
// create empty object 
minheaper = {}; 

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
    var l = heap.length;
	heap[l]= new_element;while(l>2){
	var i = Math.floor(l/2)
	if (heap[l]< heap[i])
	{
		var d= heap[i];
		heap[i] = heap[l];
		heap[l] = d;
		l=i;
	}
	}
	if (heap[l]< heap[0])
	{
		var d= heap[0];
		heap[0] = heap[l];
		heap[l] = d;
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

    // STENCIL: implement your min binary heap extract operation
}

// assign extract function within minheaper object

    // STENCIL: ensure extract method is within minheaper object






