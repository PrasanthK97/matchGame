import './index.css'

const Header = props => {
  const {sec, score} = props

  return (
    <ul id="header">
      <img
        id="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <li id="score-board">
        <p>{`Score: ${score}`}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>{`${sec} sec`}</p>
      </li>
    </ul>
  )
}
export default Header
