import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar.jsx';
import Header from './components/header.jsx';
import Main from './components/Main.jsx';
import PopupForm from './components/PopupForm.jsx';
import DropdownMenu from './components/DropdownMenu.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openNav = () => setSidebarOpen(true);
  const closeNav = () => setSidebarOpen(false);
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      {sidebarOpen && <Sidebar closeNav={closeNav} />}
      <Header openNav={openNav} openForm={openForm} onSearch={handleSearch} />
      <DropdownMenu />
      <Main searchQuery={searchQuery} />
      {formOpen && <PopupForm closeForm={closeForm} />}
      <Footer />
    </div>
  );
}

export default App;
