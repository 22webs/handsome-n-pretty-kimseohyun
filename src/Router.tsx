import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Get from './@pages/get';
import Put from './@pages/put';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/get" element={<Get />}></Route>
        <Route path="/put" element={<Put />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
