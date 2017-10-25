import throllte from './throttle-decorator'

class BaseComponent {
    render() {
        console.log('this is render')
    }
}

function component(target, name, descriptor) {
    Object.setPrototypeOf(target.prototype, BaseComponent.prototype)
    Object.setPrototypeOf(target.constructor, target.prototype)
    return target
}

@component
class App {
    @throllte(100)
    onScroll() {
            console.log(1)
    }
    init() {
        console.log(2)
        window.addEventListener('scroll', () => {
            console.log(10)
            this.onScroll()   
        })
    }
}
/**
 * @component
 * class App {}
 * component(App)
 */


/**
 *  var App = (function(){
        class App {
            init() {

            }
            onScroll() {

            }
        }
        var _temp
        _temp = throllte(100)(
            App.prototype, 
            'onScroll',  
            Object.getOwnPropertyDescriptor(App.prototype, "onScroll")
        )
        if (_temp) Object.defineProperty(App.prototype, 'onScroll', _temp)
        return App 
    })()
 */

const app = new App()
app.init()
app.render()





function h(strings, ...values) {
    /**
     * strings ['my name is', 'years old']
     * values ['kobe', '37']
     */
    let result = strings[0]
    for (let i = 0, len = strings.length-1;  i < len; i++) {
		ret += escapeHtml(values[i]) + strings[i+1]
	}
	return ret
}

const $DIV = $('<div>')
function escapeHtml(string) {
	var str = '' + string;
	return $DIV.empty().text(string).html()
}

const name = 'kobe'
const age = '37'
const template = h`my name is ${name}, ${age} years old`
