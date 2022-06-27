import {useState, useContext} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    // Stores the state of the text passed into Form by user
    const [text, setText] = useState('')
    // rating state
    const [rating, setRating] = useState('')
    //the enable/disabled button toggle
    const [btnDisabled, setBtnDisabled] = useState(true)
    //The message that displays below input box
    const [message, setMessage] = useState(``)

    //imports function from context
    const {addFeedback} = useContext(FeedbackContext)

    //function updating state when text inputed
    const handleTextChange = (e) => {
        //blank textbox has no message and button disabled
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        //less than 10 length textbox has message display and button disabled
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        //otherwise no message and button enabled
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        // e.target.value is whatever is passed into the text box
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            }
            
            addFeedback(newFeedback)

            setText('')
        }
    }
    
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2> How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {/* potential message displayed */}
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm