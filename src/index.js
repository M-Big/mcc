import ReactDOM from 'react-dom/client'
import Router from './router/index'
import './index.less'
import { Provider } from 'react-redux'
import { store } from './redux/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
)
