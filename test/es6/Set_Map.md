### Set

```
    const set = new Set()
    set.add(1)
    set.add(2)
    console.log(set) // {1,2}
```
set 是一个类似数组的数据结构，但是没有重复值

```
    const a = [2,2,1,1]
    const unique = [...new Set(a)]
    console.log(unique) // [2,1]
```

### WeakSet
* WeakSet的成员只能是对象

```
    var ws = new WeakSet();
    ws.add(1)// TypeError: Invalid value used in weak set
```

### Map
 Map 是可以用value 作为key 的数据结构

```
    const key = {a: 1}
    const temp = {key: 'xxx'}

    console.log(temp) //{key: 'xxx'}

    const map = new Map()
    map.set(key, 'xxx')
    console.log(map) //Map {Object {a: 1} => "xxx"}
    console.log(map.get(key)) //xxx

```


### WeakMap
WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名

```
    var wm = new WeakMap();
    wm.set(1, 3) // Invalid value used as weak map key
    var c = {a:1}
    wm.set(c, 2) // WeakMap {Object {a: 1} => 2}
```
