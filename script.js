const Node = (value=null, next = null) => {
    return {value, next};
}

const LinkedList = function(){
    let head = null;
    
    function getHead(){
        return head;
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
        }
    }
    function prepend(value){
        if(head == null){
            head = Node(value);
        }
        else{
            head = Node(value, head);
        }
    }
    return {getHead, append, prepend}
}