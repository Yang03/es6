### js 的模块开发

随着js能做的事情越来越多，浏览器、服务器，js似乎无处不在，
这时，使日渐增多的js代码变得合理有序就显得尤为必要，模块化开发也越来越重要。

AMD(代表requireJs) ,CMD(seaJS)就是在这种场景下产生的，

#### 首先来分析下 requireJs,seaJs

AMD(requireJs前置加载)
 AMD会预先下载依赖，由于浏览器的特点，依赖肯定需要预先加载，但是RequireJs还会
 预先执行。如代码：
 ```
 	//a.js
 	define(function(){
 		console.log('a.js')
 		return {
 			test: function(){
 			 	console.log('test')
 			}
 		}
 	})
 	//main.js
 	require(['a'], function(a){
 		console.log('main.js')
 		a.test()
 	})

 	//执行
 		//a.js, mian.js, test

 ```
 这样，如果模块依赖了很多模块，每个依赖都执行一遍，性能消耗不得不考虑
 还有就是 require()里面要把所有的依赖写一遍，还要当成参数传递。

 当然，requireJs  还有第二种写法
 ```
	//a.js
	 	define(function(){
	 		console.log('a.js')
	 		return {
	 			test: function(){
	 			 	console.log('test')
	 			}
	 		}
	 	})
	 	//main.js
	 	define(function(){
	 		console.log('main.js')
	 		require(['a'], function(a){
	 			a.test()
	 		})
	 		
	 	})
```
这种其实是一种懒加载，从netWork里面的网络请求也可以看出，这种也有问题，如果请求耗时太长，
影响下一步操作

然后就有了新的方式

```
// a.js
define(function(require, exports, module){
     console.log('a.js执行');
     })
require(['a'], function(d){
 	// todo
}); 

```

### seaJs(就近书写，延迟执行)
 首先看下，seaJs是怎样定义模块的
 ```
 //a.js
 define(function(require, exports, module){
     console.log('a.js');
     return {
          test: function(){
               console.log('test');
          }
     }
});
//main.js
define(function(require, exports, module){
     console.log('main.js');
 
     var a = require('a');
     a.test();    
});
// mian.js a.js test

 ```
 seaJs ,定义没有长长的依赖，函数中需传入形参require,exports,module即可，
 没有先执行，（就近书写，延迟执行） 当然还支持同步加载require.async('xx')


 ### 最后我们再来看看ES6 模块开发

 先上代码

```
	//a.js
	export var a= 1
	export function test(){}
	// b.js
	import {test, a} from 'a'
		console.log(a)
		test()	

```
是不是很简单。当然很多浏览器不支持，但是会有工具如babel ,webpack, gulp

#### 接下来，就介绍下webpack,babel, gulp进行模块化开发

webpack 模块管理工具, 处理带有依赖关系的模块，生成一系列表示这些模块的静态资源

gulp 自动化构建工具

balbel 将es6 编译到 es5

此处我们用webpack 的 babel-laoder进行编译

("https://github.com/flashYang/es6/tree/master/webpack-gulp") code
