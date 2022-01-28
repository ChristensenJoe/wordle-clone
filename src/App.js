import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { LightTheme, DarkTheme } from './Themes/Themes'
import Homepage from './Pages/Homepage'

function App() {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                setTheme={setTheme}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
