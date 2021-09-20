import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { ProductPage } from './pages/product'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={ProductPage} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
