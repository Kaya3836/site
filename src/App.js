import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Navbar } from "./component";

const data = {
  name: "Instant collaborations for remote teams",
  exp: "All in one for your remote team chats, collaboration and track projects",
  h2: "Your Hub for teamwork",
  h3: "Simple task management",
  p: "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
  h4: "Scheduling that actually works",
  heading5: "What people say about us"
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home {...data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
