import './App.css';
import UserInputForm from './components/UserInputForm/UserInputForm';

function App() {

  const pairs = [
    {
      id: 1,
      key: "Something here!",
      value: "Some other things here!"
    },
    {
      id: 2,
      key: "Something here!",
      value: "Some other things here!"
    }
  ]

  return (
    <div className="App">
      <UserInputForm />
    </div>
  );
}

export default App;
