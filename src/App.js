/** @jsxImportSource @emotion/react */
import './App.css';
import COLORS from './ui/colors';
import { AlertsExample } from './components/AlertsExample';
import { AlertsManager } from './components/AlertsManager';
import { useAlertReducer } from './reducers/useAlertReducer';

const appStyles = {
  backgroundColor: COLORS.appBackground,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function App() {
  const [alerts, dispatch] = useAlertReducer();

  return (
    <div className="app" css={appStyles}>
      <AlertsManager alerts={alerts}/>
      <AlertsExample dispatch={(action) => dispatch(action)}/>
    </div>
  );
}

export default App;
