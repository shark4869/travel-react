//components
// function Hello (){
//    return (
//        <h2>Hello everyone</h2>
//    )
// }
// import React from 'react';
// class Hello extends React.Component {
//    render() {
//     return <h2>Hello everyone</h2>;
//    }
// }
//props----------------------
function Persons() {
  return (
    <div>
      <Person name="Uyen" age="22" color='red' />
      <Person name="Hien" age="22" color='blue' />
    </div>
  );
}

function Person({name,age,color}) {
  return (
    <div style={{color: color}}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Persons;
//conditional render--------------------------
// function Login(props) {
//   const isLoggedIn = props.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn && (<p>Welcome!</p>)}
//     </div>
//   )
// }
// function Wellcome() {
//   return (
//     <div>
//       <Login isLoggedIn={true} />
//     </div>
//   );
// }
// export default Wellcome;

//----------------- REACT EVENT
//--read props
// function Item({ message, title }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {title}
//     </button>
//   );
// }
// export default function Button() {
//   return (
//     <div>
//       <Item message='Hello one' title='Button 1'/>
//       <Item message='Hello two' title='Button 2'/>
//     </div>
//   );
// }
// pass event handlers as props 

// function ButtonItem({ onClick, text}) {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   );
// }

// function Button({ wellcome,buttonText }) {
//   function handleClick() {
//     alert(`${wellcome}!`);
//   }
//   return (
//     <ButtonItem onClick={handleClick} text={buttonText}>
//     </ButtonItem>
//   );
// }
// export default function Buttons() {
//   return (
//     <div>
//       <Button wellcome="Hello everyone" buttonText='Click button!' />
//       <Button wellcome="Xin chào" buttonText='Click me!' />
//     </div>
//   );
// }

