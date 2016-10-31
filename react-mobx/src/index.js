import React, { PureComponent } from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import Root from './container/Root'
import RedditStore from './store/RedditStore'
const redditStore = new RedditStore()

redditStore.subscribeServerToStore()

console.log(redditStore.reddites)

const element = document.getElementById('root')

render(<AppContainer>
            <Root redditStore={redditStore}/>
        </AppContainer>,
        document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./container/Root', () => {
        const RootContainer = require('./container/Root').default;
        render(<AppContainer>
                    <RootContainer redditStore={redditStore}/>
                </AppContainer>,
                document.getElementById('root')
            )
    })
}
