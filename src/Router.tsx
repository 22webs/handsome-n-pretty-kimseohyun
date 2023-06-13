import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindFollowsPage from './pages/FindFollowsPage';
import FollowUsersPage from './pages/FollowUsersPage';
import MainPage from './pages/MainPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/find-follows" element={<FindFollowsPage />} />
        <Route path="/follow-users" element={<FollowUsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
