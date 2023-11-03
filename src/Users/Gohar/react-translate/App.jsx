import React from 'react'
import LOCALES from './i18n/messages/localies'
import { useState } from 'react'
import Translate from './i18n/messages/Translate'
import { Provider } from 'react-intl/src/components/injectIntl'
import { About } from './components/About'

export default function App() {
    const [firstlocale, setLocale] = useState(LOCALES.ENGLISH)
    const handleChamge =(e)=>{
        setLocale(LOCALES[e.target.value])
    }
  return (
    <Provider locale={locale}>
       
        <div>
        <select name="language" id="language" onChange={hendlChange}>
            <option value="ENGLISH">ENGLISH</option>
            <option value="RUSSIA">RUSSIA</option>
            <option value="ARM">ARM</option>
        </select>
        <div className="contanier">
            <h2>
                {Translate('title')}
            </h2>
            <p>
                {Translate('description')}
            </p>
            <button>
                {Translate('btnText')}
            </button>
        </div>
    </div>
    </Provider>

    
  )
}
