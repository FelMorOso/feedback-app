import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    // Stores the state of the text passed into Form by user
    const [text, setText] = useState('')

    //function that updates state text when submitted
    const handleTextChange = (e) => {
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
                    <Button type="submit" version='secondary'>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm