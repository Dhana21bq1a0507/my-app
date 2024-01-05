import React from 'react'
import More from './More';
import {Route,Routes,BrowserRouter} from "react-router-dom";

function Next() {
  return (
    <div>
      <Routes>
          <Route path="/more" element={<More />} />
        </Routes>
    </div>
  )
}

export default Next
