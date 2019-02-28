
// class Stack {
//   constructor() {
//     this.storage = '';
//     console.log(this.storage.length)
//   }

// 	isEmpty() {
// 		if(this.storage.length <= 0){
// 			return true
// 		}else {
// 			return false
// 		}
// 	}
// 	push(value){
// 		this.storage += value
// 		return this.storage.length
// 	}

// 	pop() {
// 		var str = this.storage;
// 		var deletedItem = str.slice(str.length-1)
// 		this.storage = str.substr(0, str.length-1)
// 		return deletedItem
// 	}

// 	peek() {
// 		var str = this.storage
// 		return str[str.length-1]
// 	}

// 	size() {
// 		return this.storage.length
// 	}
// }
// console.log(stack.push('Ruchi'))
// console.log(stack.pop())
// console.log(stack.isEmpty())
// console.log(stack.peek())
// console.log(stack.size())


class Stack {
  constructor(maxcapacity) {
    this.maxcapacity = maxcapacity
    this._storage = {};
    // console.log(Object.keys(this._storage))
  }

  isEmpty() {
  	if((Object.keys(this._storage)).length <= 0){
  		return true
  	}else return false
  }

  push(keys, value) {
    if(Object.keys(this._storage).length > this.maxcapacity){
      return console.log('Max capacity already reached');
    }else
  	return this._storage[keys] = value
  }

  pop() {

  }

  contains(value) {
    for(var values in this.storage){
      if(value == this.storage[values]){
        return true
      }else return false
    }
  }
 
}

var stack = new Stack(3)
console.log(stack.isEmpty())

console.log(stack.push('lastname', 'kharwar'))
console.log(stack.push('firstname', 'ruchi'))
console.log(stack.push('age', 24))
console.log(stack.push('id', 1))
console.log(stack.isEmpty())
console.log(stack.contains('lastname'))



 // 
 //  
 //  pop() {}
 //  peek() {}
 //  size() {}