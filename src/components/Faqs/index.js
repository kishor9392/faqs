import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList, onTap} = props

  const onPunch = id => {
    onTap(id)
  }

  return (
    <div className="bg">
      <div className="bg1">
        <h1 className="h1">FAQs</h1>
        <ul className="bg4">
          {faqsList.map(each => (
            <FaqItem item={each} key={each.id} onPunch={onPunch} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
