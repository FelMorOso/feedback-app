import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    // Stores the state of the text passed into Form by user
    const [text, setText] = useState('')
    // rating state
    const [rating, setRating] = useState('')
    //the enable/disabled button toggle
    const [btnDisabled, setBtnDisabled] = useState(true)
    //The message that displays below input box
    const [message, setMessage] = useState(``)

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
    
    return (
        <Card>
            <form>
                <h2> How would you rate your service with us?</h2>
                {/* @todo - rating select component */}
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