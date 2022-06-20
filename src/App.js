import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete?')) {
            // creates new array where the feedback filters out the items that don't have same id
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <> {/* This is called a fragment '<> </>', it is used to put in two things at once here */}
            
            {/* This imports the Header component we built */}
            <Header/>

            {/* Important: must use 'className' instead of 'class' for JSX (version of HTML used in React) */}
            {/*Important: this return must only have 1 html component*/}
            <div className='container'>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App