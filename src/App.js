import './App.css';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense';

function App() {

  const expenses = [
    {
      title : 'theory test',
      date: '15/05/2021',
      cost: '45€'
    },
    {
      title : 'lessons',
      date: '30/06/2021',
      cost: '300€'
    },
    {
      title : 'driving test',
      date: '25/07/2021',
      cost: '100€'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense />
        <Expenses expenseData = {expenses} />
      </header>
    </div>
  );
}

export default App;
