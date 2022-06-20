import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <> {/* This is called a fragment '<> </>', it is used to put in two things at once here */}
            
            {/* This imports the Header component we built */}
            <Header/>

            {/* Important: must use 'className' instead of 'class' for JSX (version of HTML used in React) */}
            {/*Important: this return must only have 1 html component*/}
            <div className='container'>
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App