function request(url, delay) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest()
        req.open('get', url)
        req.onreadystatechange = function(){
            if (req.readyState == 4) {
                if (req.status == 200) {
                     resolve(JSON.parse(req.responseText))
                } else {
                    reject(req)
                }
            }
        }
        if (delay) {
            setTimeout(function(){
                req.send()
            }, delay)
        } else {
            req.send()
        }


    })
}


// function spawn(generatorFunc) {
//   function continuer(verb, arg) {
//     var result;
//     try {
//       result = generator[verb](arg);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//     if (result.done) {
//       return result.value;
//     } else {
//       return Promise.resolve(result.value).then(callback, errback);
//     }
//   }
//   var generator = generatorFunc();
//   var callback = continuer.bind(continuer, "next");
//   var errback = continuer.bind(continuer, "throw");
//   return callback();
// }


function addTitle(html) {
    console.log(html)
    var dom = document.getElementById('title')
    dom.innerHTML = html
}

function addChapter(content) {
    var dom = document.getElementById('content')
    var p = document.createElement('p');
    p.innerHTML = content;
    dom.appendChild(p);
}

function runGenerator(){
    var gen = run()

    function go(result){
        if(result.done) return
        result.value.then(function(r){
            go(gen.next(r))
        })
    }

    go(gen.next())
}

function* run() {

    const story = yield request('../../data/story.json')
    addTitle(story.heading)

    let chapterPromises = story.chapterUrls.map( function(chapterUrl) {
            return request('../../data/' + chapterUrl)
    });

   for (let i = 0, chapterPromise; chapterPromise = chapterPromises[i]; i++) {

     let chapter = yield chapterPromise;
     addChapter(chapter.html);
   }

}

runGenerator()
