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
        if(value == undefined){
            return
        }
        if(size == 0){
            head = Node(value);
            tail = head;
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
        if(value == undefined){
            return
        }
        if(size == 0){
            head = Node(value);
            tail = head;
        }
        else{
            head = Node(value, head);
        }
        size++;
    }
    function pop(){
        let poppedElement = undefined;
        if(size == 0){
            return poppedElement;
        }
        else if(size == 1){
            poppedElement = getElementByIndex(1);
            head = null;
            tail = null;
            size--;
            return poppedElement;
        }
        else{
            let currentElement = head;
            let successiveElement = currentElement.next;
            while(successiveElement.next != null){
                currentElement = currentElement.next;
                successiveElement = successiveElement.next;
            }
            poppedElement = successiveElement;
            currentElement.next = null;
            tail = currentElement;
            size--;
            return poppedElement;
        }
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
    function contains(value){
        if(size==0){
            return false;
        }
        else{
            if(tail.value === value){
                return true;
            }
            else{
                let currentElement = head;
                while(true){
                    if(currentElement.value === value){
                        return true;
                    }
                    else{
                        currentElement = currentElement.next;
                        if(currentElement === null){
                            return false;
                        }
                    }
                }
            }
        }
    }
    function find(value){
        if(size==0){
            return null;
        }
        else{
            if(tail.value === value){
                return size;
            }
            else{
                let currentElement = head;
                let currentIndex = 1;
                while(true){
                    if(currentElement.value === value){
                        return currentIndex;
                    }
                    else{
                        currentIndex++;
                        currentElement = currentElement.next;
                        if(currentElement === null){
                            return null;
                        }
                    }
                }
            }
        }
    }
    function toString(){
        if(size==0){
            return null;
        }
        else{
            stringifiedListValues = '';
            let currentElement = head;
            for(let currentIndex=1; currentIndex<=size; currentIndex++){
                stringifiedListValues += `( ${currentElement.value} ) => `;
                currentElement = currentElement.next;
            }
            return stringifiedListValues+'null'
        }
    }
    return {getHead, getTail, getSize, append, prepend, pop, contains, find, toString, getElementByIndex};
}
