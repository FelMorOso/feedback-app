import PropTypes from 'prop-types'

function Card({children, reverse}) {
    return (
        // interesting logic here
        // use `` marks for this template string
        // always show `card` class
        // ${reverse && 'reverse'} template string insertion => if (reverse) then use class 'reverse'
        // Why does this work?
        // && operator works like this:
        // return value of first falsy operand encountered OR if all values truthy then return last value
        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>

        <div className='card' style={{
            backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>{children}</div>
    )
  }

  Card.defaultProps = {
    reverse: false,
  }

  Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
  }
  
  export default Card