import PrayerWall from "./pages/Prayer Wall/PrayerWall";
import Answered from "./pages/Answered/Answered";
import Testimonies from "./pages/Testimonies/Testimonies";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrayerWall />} />
          <Route path="/answered" element={<Answered />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;