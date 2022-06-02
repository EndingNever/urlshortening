import './App.css';
import Gray from './Components/Gray/Gray';
import Header from './Components/Header/Header';
import MoreThanJust from './Components/MoreThanJust/MoreThanJust';

function App() {
  return (
    <div className="App">
      <Header />
      <MoreThanJust />
      <Gray />
    </div>
  );
}

export default App;
// update image after website built? use it in public.(user images, hero image) We're not really doing this now
// Icons, things you know will never be changed => src