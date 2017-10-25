
export default function throttle (fn, delay = 100, options) {
    let context
    let args
    let result 
    let previous
    let timeout 
    let later = () => {
        previous = new Date().getTime()
        timeout = null
        result = fn.apply(context, args)
        context = args = null 
    }  
    return () => {
         context = this
         args = arguments
         let now = new Date().getTime()
         if (!previous) {
             previous = now 
         }
         let wait = delay - (now - previous)
         if (wait > delay || !delay) {
             clearTimeout(timeout);
             timeout = null;
             previous = now;
             result = fn.call(context,args)
             context = args = null;
         } else if(!timeout) {
            timeout = setTimeout(later, delay)
         }
     }    
}