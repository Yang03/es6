import {observable, computed, reaction} from 'mobx'
//import Fetch from 'fetch.io'

export default class RedditStore {
    @observable reddites = []

    //@computed

    subscribeServerToStore() {
        fetch(`http://www.reddit.com/r/mobx.json`).then(response => response.json()
        ).then(data => {
            this.reddites = data.data.children
        })
    }

}
