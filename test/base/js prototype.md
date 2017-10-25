### 什么是原型(prototype)?
每一个构造函数都有一个原型对象，原型对象对象包含一个指向构造函数的指针。
实力包含一个指向原型对象的内部指针。

```
    function Person () {

    }
    Person.prototype.say = function() {
        console.log('wow')
    }
    var p = new Person()
    p.__proto__  === Person.prototype
    Person.prototype.constructor == Person
```

### 原型链的问题

```
    function SuperType() {
        this.colors = ['blue', 'red']
    }

    function SubType() {

    }
    SubType.prototype = new SuperType()
    var instance1 = new SubType()
    instance1.colors.push('black')
    console.log(instance1.colors) //['blue','red', 'black']

    var instance2 = new SubType()
    console.log(instance2.colors) //['blue','red', 'black']

```
1.subType的实例会共享一个是属性，一个实例修改，导致所有实例属性被修改。
2.实例化无法向父类的构造函数传递参数。

Object.create(super, sub),能让super和sub包含相同的属性和方法，但是
和原型模式一样，实例会共享属性，方法。

### 组合继承(原型和构造函数模式)

```
    function SuperType(name) {
        this.colors = ['blue', 'red']
        this.name = name
    }

    function SubType(name) {
        SuperType.call(this, name)
    }
    SuperType.prototype.getName = function() {
        return this.name
    }

    //继承
    SubType.prototype = new SuperType()
    // 这里需要把构造函数指向subType,这样实例化的时候，会调用自己的构造函数
    //改掉重写原型而失去的默认constructor属性
    SubType.prototype.constructor = SubType

    var instance1 = new SubType('kobe');
    instance1.colors.push('black') 
    console.log(instance1.colors) // blue,red,black
    console.log(instance1.getName) //kobe

    var instance2 = new SubType('mac')
    console.log(instance2.colors) // blue,red
    console.log(instance2.getName) //mac
```

```
    function inherit(subType, superType) {
        var prototype = object(superType.prototype)
        prototype.constructor = subType
        subType.prototype = prototype
    }
```
### 总结
javascript的继承，主要通过将一个类型的实例赋给子类的原型实现的，原型链的问题在于
属性和方法的在实例间共享，为了解决这个问题，需要用到构造函数，在子类的构造函数里面，调用
父类的构造函数，这样每个实例就有了自己的属性，通过原型链共享属性方法，通过构造函数继承实例属性。

### 什么是[[prototype]] 链？
当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止。

直到查找到达原型链的顶部 - 也就是 Object.prototype - 如果仍然没有找到指定的属性，就会返回 undefined。
用代码描述：
```
    function getProperty(obj, prop) {
    if (obj.hasOwnProperty(prop))
        return obj[prop]

    else if (obj.__proto__ !== null)
        return getProperty(obj.__proto__, prop)

    else
        return undefined
    }
```    
![6941baebly1ff9jtuafvxj20ge0elt9d](https://user-images.githubusercontent.com/10190366/31983951-212c8c72-b925-11e7-912a-bd8b5387f4b6.jpg)

相互关联的原型组成的链状结构就是原型链

