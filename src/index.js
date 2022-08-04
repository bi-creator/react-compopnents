import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './ComponentDetails'
import Approval from './Approval'


const App = () => {
    return (
    <div className='ui container comments'>
        <Approval>

        <CommentDetail author='man' time='today at 6 pm' content='this is nice' avatar='image.jpg' />
        </Approval>
        <Approval><CommentDetail author='jith' time='yesterday at 9 pm' content='this is blaa' avatar='image.jpg' /></Approval>
        <Approval><CommentDetail author='reddy' time='tom at 10 am' content='this is bad' avatar='image.jpg' /></Approval>

    </div>
    )

}
ReactDOM.render(<App />, document.querySelector('#root'));