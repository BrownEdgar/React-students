import React, { Fragment } from 'react'
import { IntlProvider, defineMessages } from 'react-intl'
import { Message } from './messages'
export default function Provider({children,local}) {
  return (
   <IntlProvider 
   textComponent={Fragment}
   locale=''
   
   >
    
        {children}
   </IntlProvider>
  )
}
