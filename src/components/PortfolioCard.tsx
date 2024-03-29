import React from 'react'

const PortfolioCard = ({
  project: {
    title
  }
}: {
  project: {
    title: string
  }
}) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='heading'>
          <h3>
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard