import PropTypes from 'prop-types'

// The 'props' catches all variable properties passed into the header , can also use {var1, var2} to destructure
function Header({text, bgColor, textColor}) {
  // Styling
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2> {/* Use the 'props' variable passed into the function */}
        </div>
    </header>
  )
}

// Default values for the Header component
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

// Add here for static type checking (SFB)
Header.propTypes = {
  text: PropTypes.string,
}

export default Header