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

async function getStory() {
    const response =  await request('../../data/story.json')
    addTitle(response.heading)
    let result = await getAllChapter(response.chapterUrls)
    result.forEach(function(value, index) {
		addChapter(value.html)
	})
}

async function getAllChapter(data) {

    let promises = data.map(function(value){
        return request('../../data/' + value)
    })
	let results = [];
	for (let promise of promises) {
		results.push(await promise)
	}
	return results
}

getStory()
