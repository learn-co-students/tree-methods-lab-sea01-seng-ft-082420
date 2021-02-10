
function inOrder(node){
    if(node.left !== null){
        inOrder(node.left)
    }
    console.log(node.data)
    if(node.right !== null){
        inOrder(node.right)
    }
}

function findOrAdd (rootNode, newNode){
    console.log(rootNode, newNode)
    let currentNode = rootNode
    if(currentNode === null){
        currentNode = newNode
    }else{
    if(newNode.data < currentNode.data){
      currentNode.left === null?currentNode.left = newNode:findOrAdd(currentNode.left,newNode)
      return true
    }
    else{
      currentNode.right === null?currentNode.right = newNode:findOrAdd(currentNode.right,newNode)
      return true
    }
    }
    return false
}

function max(rootNode){
    let maxVal = rootNode
    if(rootNode === null){
        return maxVal
    }
    if(rootNode.right === null){
      return maxVal
    }
    if(rootNode.right.data > maxVal.data){
        maxVal = rootNode.right
        return max(rootNode.right)
    }
}


function min(rootNode){
    let minVal = rootNode
    if(rootNode === null){
        return minVal
    }
    if(rootNode.left === null){
        return minVal
    }
    if(rootNode.left.data < minVal.data){
        minVal = rootNode.left
        return min(rootNode.left)
    }
}