import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NotesPage } from "./pages/NotesPage";
import { CreateNotePage } from "./pages/CreateNotePage";
import { NoteDetailPage } from "./pages/NoteDetailPage";
import { NotesProvider } from "./context/NotesContext";
import Footer from "./components/Footer";

function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
        <div className='min-h-screen bg-gray-50'>
          <Header />
          <main className='pb-12'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/notes' element={<NotesPage />} />
              <Route path='/notes/:id' element={<NoteDetailPage />} />
              <Route path='/create' element={<CreateNotePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
