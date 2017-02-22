```
// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`


//
let timeOfDay = (new Date).getHours()
console.log(`${timeOfDay < 12 ? 'Morning' : 'Evening'}`)

let tags = [1, 2, 3, 4]

let html = `
    <ul>
        ${tags.map((value) => `<li>${value}</li>`).join('')}
    </ul>
`
console.log(html)
```
