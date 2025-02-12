import React from 'react';

// Définition de l'interface des props
interface GreetingProps {
  name: string; // Le prop 'name' est de type string
}

// Définition du composant avec typage des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
