import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";


function Exo12() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "green",
  },
  
});

export default Exo12;
