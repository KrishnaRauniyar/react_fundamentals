import './App.css';
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";
// import { ParentComponent } from "./components/ParentComponent";
// import { ClickHandler } from "./components/ClickHandler";
// import { UserGreeting } from "./components/UserGreeting";
// import { NameList } from "./components/NameList";
// import { StyleSheet } from "./components/StyleSheet";
import { Inline } from "./components/Inline";
import "./components/appStyles.css";
import styles from "./components/appStyles.modules.css";

const App = () => {
  return (
    <div className="App">
      {/* <Greet name="Krishna" yourCaste="Rauniyar" />
      <Greet name="Krishna" yourCaste="Rauniyar">
        This is for children props without passing
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

    </div>
  );
}

export default App;
