import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Get from './@pages/get';
import Main from './@pages/main';
import Put from './@pages/put';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/get" element={<Get />}></Route>
        <Route path="/put" element={<Put />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
