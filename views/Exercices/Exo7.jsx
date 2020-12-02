import React from "react";
import {useState} from "react";
import {View, TextInput, Text, StyleSheet,  } from "react-native";
 import ButtonCustom from "../../components/ButtonCustomer";



function Exo7() {
    const [name, setName] = useState("");
    
    const handleSubmit = (event) => {
        console.log(`
          Name: ${name}
         
        `);
        
        event.preventDefault();
      }

    
    return(
        <form onSubmit={handleSubmit}>
          <h1>What is your name</h1>

          <label>
           Name:
        <input
          name="john"
          onChange={e => setName(e.target.value)}
          required />
      </label>
      <button>Say Hello</button>
    </form>
    );
      
}
export default Exo7;