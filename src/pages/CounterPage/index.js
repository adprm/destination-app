import React from 'react';
import { View } from 'react-native';

const CounterPage = () => {
  const [counter, setcounter] = useState(0);
  
  const increment = () => {
    setcounter(counter + 1);
  }

  const decrement = () => {
    setcounter(counter - 1);
  }
  
  return (
    <View>
      <div>{counter}</div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </View>
  );
};

export default CounterPage;
