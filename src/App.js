import './App.css';


const products = [
  {title: 'Cabbage', id: 1},
  {title: 'Garlic', id: 2},
  {title: 'Apple', id: 3}
];

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


function TestComponent(){
  return (
    <div>
      <h1>Hi there</h1>
      <p>Components can't return multiple JSX tags. <code><></></code></p>
    </div>
  );
}



function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>);

  
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
      <TestComponent />
      <h3>{user.name}</h3>
      <img 
        src={user.imageUrl} 
        className="avatar" 
        alt={'Photo of '+user.name} 
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: 30
        }} />
        <ul>{listItems}</ul>
    </div>
    
  );
}

export default App;
