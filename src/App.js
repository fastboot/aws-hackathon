import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Notfound from './containers/NotFound'
import ClinicalKeywordDisambigution from './containers/ClinicalKeywordDisambigution'
import PharmaCovigilance from './containers/Pharmacovigilance'

function App() {

  return (
      <React.Fragment>
        <Routes>
          <Route exact path = '/aws-hackathon' element={<Home />} />
          <Route exact path = '/pharmaCovigilance' element={<PharmaCovigilance />} />
          <Route exact path = '/clinical-keyword-disambigution' element={<ClinicalKeywordDisambigution />} />
          <Route component = {<Notfound />} />
        </Routes>
      </React.Fragment>  
  )
}

export default App