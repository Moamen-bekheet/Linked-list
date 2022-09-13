const Node = (value=null, next = null) => {
    return {value, next};
}

const LinkedList = function(){
    let head = null;
    let tail = null;
    let size = 0;
    function getHead(){
        return head;
    }
    function getTail(){
        return tail;
    }
    function getSize(){
        return size;
    }
    function append(value){
        if(head == null){
            head = Node(value);
        }
        else{
            let currentElement = head;
            while(currentElement.next != null){
                currentElement = currentElement.next;
            }
            currentElement.next = Node(value);
            tail = currentElement.next;
        }
        size++;
    }
    function prepend(value){
        if(head == null){
            head = Node(value);
        }
        else{
            head = Node(value, head);
        }
        size++;
    }
    function getElementByIndex(index){
        if((index>size)||(index<1)){
            return undefined;
        }
        else if(index==1){
            return head;
        }
        else if(index==size){
            return tail;
        }
        else{
            let notFound = true;
            let listTraversalCounter = 1;
            let currentElement = head;
            while(notFound){
                currentElement = currentElement.next;
                listTraversalCounter++;
                if(listTraversalCounter == index){
                    notFound = false;
                }
            }
            return currentElement;
        }
    }
    return {getHead, getTail, getSize, append, prepend, getElementByIndex}
}