
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Detail from "@/pages/Detail";
import ThematicJourney from "@/pages/ThematicJourney";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/Toaster";

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/photo/:id" element={<Detail />} />
        <Route path="/theme/:id" element={<ThematicJourney />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
