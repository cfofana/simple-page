import './App.css';


function MyButton(){
  return (
    <button className="btn">This is a button</button>
  );
}

function MyForm(){
  return(
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" /><br/>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" /><br/>
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="10" cols="30"></textarea>
    </form>
  );
}

function App() {
  return (
    <div className="container">
      <header>
        <h1>This is a very simple page</h1>
      </header>
      <main>
        <h2>This is a heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt, veritatis repellendus nulla necessitatibus nisi molestias voluptatum quasi soluta voluptatem consequuntur consequatur magnam inventore aperiam ullam. Explicabo ad quas repudiandae.</p>
      </main>
      <MyButton />
      <MyForm />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
