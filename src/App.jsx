import useShopifyConnect from './hooks/useShopifyConnect'

function App() {
  const {param} = useShopifyConnect();
  return (
    <div className="App">
      <h1>Proof of concept React - Shopify connection</h1>
      <pre>
        {JSON.stringify(param)}
      </pre>
    </div>
  )
}

export default App
