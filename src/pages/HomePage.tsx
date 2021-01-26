import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
    </div>
  )
}