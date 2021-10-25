import { BrowserRouter, Route } from 'react-router-dom';
import CouponContents from "./inc/CouponContents"
import Main from "./inc/Main"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Main} exact />
        <Route path="/Coupon" component={CouponContents} />
      </BrowserRouter>
    </div>
  )
}

export default App;