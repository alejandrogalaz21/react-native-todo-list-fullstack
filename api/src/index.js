import http from 'http'
import app from './app'

const PORT = app.get('port')

http.Server(app).listen(PORT, async () => {
  try {
    console.log(`Api started: http://localhost:${PORT}/api/`)
  } catch (error) {
    console.error(error)
  }
})
