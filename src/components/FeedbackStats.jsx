import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    //importing feedback from context
    const { feedback } = useContext(FeedbackContext)

    //calculate ratings avg
    let average = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length
    //round to 1 decimal
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats