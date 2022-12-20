import "./App.css";
import logo from "./assets/logo.png";
import data from "./assets/data.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Netflix" />
        {/* <div>
          <img src="" alt="" />
        </div> */}
      </header>
      <main>
        {data.map((section, index) => {
          // console.log(section.images);
          return <Section key={index} section={section} />;
        })}
      </main>
    </div>
  );
}

export default App;
