import {useState} from 'react'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        // store additional state
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value) //This is the function passed into 
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                <input
                    type='radio'
                    id={`num${i + 1}`}
                    name='rating'
                    value={i + 1}
                    onChange={handleChange} //handles the change
                    checked={selected === i + 1}
                />
                <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect