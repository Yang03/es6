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


function addTitle(html) {
    var dom = document.getElementById('title')
    dom.innerHTML = html
}

function addChapter(content) {
    var dom = document.getElementById('content')
    var p = document.createElement('p');
    p.innerHTML = content;
    dom.appendChild(p);
}

// request('../../data/story.json').then(function(story) {
//     addTitle(story.heading)
//     return story.chapterUrls.reduce(function(chain, chapterUrl) {
//
//        return chain.then(function() {
//          return request('../../data/' + chapterUrl)
//        }).then(function(chapter) {
//         addChapter(chapter.html)
//        });
//     }, Promise.resolve())
// }).then(function() {
//   console.log("All done")
// }).catch(function(err) {
//   console.log("error: " + err.message)
// })
//

var promiseAll = request('../../data/story.json').then(function(story) {
    addTitle(story.heading)
    // console.log(1)
    var promises = story.chapterUrls.map(function(value) {
        return request('../../data/' +  value)
    })
    // console.log(promises)
    return Promise.all(promises)
})

// console.log(promiseAll)
//
promiseAll.then(function(chapters) {

     chapters.forEach(function(chapter) {
         addChapter(chapter.html)
     })
     console.log("All done")
}).catch(function(err){
    console.log(err.message)
})

















// function functionName() {
//
// }
