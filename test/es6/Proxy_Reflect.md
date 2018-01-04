### Proxy
Proxy 用于修改某些操作的默认行为,可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
都必须先通过这层拦截,可以对外界的访问进行过滤和改写

```
    const person = {
        name: 'kobe',
        age: 24
    }

    const proxy = new Proxy(person, {
        get:function(target, property){
            return target[property] + 'test'
        },
        set: function(target, property, value) {
            if (property == 'age' ) {
                if (value > 0) {
                    target[property] = value
                } else {
                    throw 'age must > 0'
                }
            }
        }
    })
    console.log(proxy.name) //kobetest
    proxy.age = -1 // error
```

### Reflect
Reflect 可以拿到对象的方法

```
    const obj = {
        age: 24  
    }
    Reflect.set(obj, 'age', 25)
    console.log(obj.age) // 25


    const mo = {
      foo: 1,
      bar: 2,
      get baz() {
        // this ===  receiver
        return this.foo + this.bar
      },
    }

    const mrc = {
      foo: 4,
      bar: 4,
    }

    // (target, name, receiver)
    // receiver this绑定receiver
    Reflect.get(mo, 'baz', mrc) //8
    console.log(mo.baz) // 3

```
