import { renderToString } from 'react-dom/server'
import Root, { prerenderPaths, renderSeoHead } from './App.jsx'

export { prerenderPaths, renderSeoHead }

export function render(path) {
  return renderToString(<Root path={path} />)
}
