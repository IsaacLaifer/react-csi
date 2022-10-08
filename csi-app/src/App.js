import { Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import List from './routes/list/list.component';
import Ajout from './routes/ajout/ajout.component';

import './App.css';

const App = () =>  {
  return (
    <Routes>
      <Route path='/' element={<Navigation/> }>
      <Route index element={ <Home />}/>
      <Route path='list' element={ <List /> }/>
      <Route path='ajout' element={ <Ajout /> }/>
      </Route>
    </Routes>
  );
}
export default App;
