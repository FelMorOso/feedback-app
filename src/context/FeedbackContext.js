import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    // initializing the feedback state
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This item is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This item is feedback item 3',
            rating: 7,
        },
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //copies immutable feedback array adds new feedback to start
    }

    //initializing the delete feedback function
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete?')) {
            // creates new array where the feedback filters out the items that don't have same id
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    
    return <FeedbackContext.Provider value={{
        feedback: feedback,   // IMPORTANT: all states and functions must be passed through here
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext