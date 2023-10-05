import './index.css'

const FaqItem = props => {
  const {item, onPunch} = props

  const {id, questionText, answerText, isClicked} = item

  const url = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const alt = isClicked ? 'minus' : 'plus'

  const onPress = () => {
    onPunch(id)
  }

  const par = () => (
    <div>
      <hr className="line" />
      <p className="par">{answerText}</p>
    </div>
  )

  return (
    <li className="bg2">
      <div className="bg3">
        <h1 className="h2">{questionText}</h1>
        <button className="btn" type="button" onClick={onPress}>
          <img src={url} alt={alt} className="img" />
        </button>
      </div>
      {isClicked ? par() : ''}
    </li>
  )
}

export default FaqItem
