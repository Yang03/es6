###  接口
    接口可以用来描述一个类的解构

```
    interface SquareConfig {
        width: number;
        height: number;
    }

    function Square(config: SquareConfig) : {width: number; height: number} {
        console.log(width)
        console.log(height)
    }
```   
可选属性
```
    interface SquareConfig {
        width?: number;
        height?: number;
    }
```
类型检查
```
interface LabelledValue {
  label: string;
  size ?: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
  console.log(labelledObj.xsize); //error xsize在 LabelledValue中不存在
}

let myObj = {xsize: 10, label: "Size 10 Object"};
printLabel(myObj);
```
这是因为ts会做检查，但是可以通过下面的方式来忽滤检查
```
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
``` 
