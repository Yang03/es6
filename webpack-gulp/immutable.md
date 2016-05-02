### Immutable js

```
import Immutable from 'immutable'

const a = Immutable.fromJS({a: 1,b:2, c:3})
console.log(a.inspect())  // Map { "a": 1, "b": 2, "c": 3 }

//
let students = Immutable.fromJS([
	{name: 'a', gender: 'F', score: 80},
	{name: 'b', gender: 'M', score: 90},
	{name: 'c', gender: 'F', score: 60}
])

//取值
console.log(students.get(0)) //Map
console.log(students.getIn([0, 'score'])) //80

// 赋值
let s = students.setIn([0, 'score'], 85)
console.log(s.getIn([0, 'score'])) //85

//判断
let c = Immutable.Map({name: 'c', gender: 'F', score: 60 })
console.log(students.includes(c)) //true

// 判断是否想等
console.log(c.equals(students.get(2))) //true

//统计
console.log(students.count(s => s.get('gender') == 'F')) //2
console.log(students.countBy(e => e.get('gender')))

//检索
students.find(s => s.get('name') == 'c')

//更新
students.update(
	students.findIndex(s => s.get('name') == 'c') , s=> s.set('score', 100)
)

//删除
students.delete(s => s.get('name') == 'c')

//
console.log(students.map(s => s.get('score')).max())

console.log(students.maxBy(s => s.get('score')))

console.log(students.groupBy(s => s.get('gender')).map(g => g.map(e => e.get('score')).reduce((a, b)=> a + b, 0)))

console.log(students.flatMap(s => ['name=' + s.get('name'), 'score=' + s.get('score')]).join('&amp;')
```
