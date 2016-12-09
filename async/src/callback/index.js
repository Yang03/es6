function request(url, callback, delay) {
    var req = new XMLHttpRequest()
    req.open('get', url)
    req.onreadystatechange = function(){
        if (req.readyState == 4) {
            if (req.status == 200) {
                 callback && callback({'status' : 1, 'data': req.responseText})
            } else {
                callback && callback({'status' : -1, 'data': 'request fail'})
            }
        }
    }
    if (delay) {
        setTimeout(function() {
            req.send()
        }, delay)
    } else {
        req.send()
    }

}

function getStory() {
    request('../../data/story.json', function (responseText) {
        if (responseText.status == 1) {
            var data = JSON.parse(responseText.data)
            addTitle(data.heading)
            var time = 0;
            data.chapterUrls.forEach(function(value) {
                time+= 2000
                request('../../data/' + value, function(req){
                    var chapter = JSON.parse(req.data)
                    addChapter(chapter.html)
                }, time)
            })
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

getStory()
