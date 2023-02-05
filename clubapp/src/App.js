import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HzNav from './components/Nav/HzNav/HzNav';
import BodyContainer from './components/Body/BodyContainer/BodyContainer'
import NavProvider from './context/navProvider';
import {HeadProvider, Title} from 'react-head';

function App() {

  return (
    <HeadProvider>
      <Title>Home</Title>
      <NavProvider>
          <div className="App">
            <HzNav></HzNav>
            <BodyContainer></BodyContainer>
          </div>
      </NavProvider>
    </HeadProvider>
  );
}

export default App;
