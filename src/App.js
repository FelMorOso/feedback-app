import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //copies immutable feedback array adds new feedback to start
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete?')) {
            // creates new array where the feedback filters out the items that don't have same id
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            
            {/* This imports the Header component we built */}
            <Header/>

            {/* Important: must use 'className' instead of 'class' for JSX (version of HTML used in React) */}
            {/*Important: this return must only have 1 html component*/}
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }></Route>

                    <Route path='/about' element={<AboutPage/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App