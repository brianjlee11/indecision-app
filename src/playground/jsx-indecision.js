//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running");

const app = {
 title: 'Indecision App',
 subtitle: 'Helps you decide!',
 options: []
};

const onFormSubmit = (e) => {
 e.preventDefault();
 const option = e.target.elements.option.value;

 if (option) {
  app.options.push(option);
  e.target.elements.option.value = '';
  reRender();
 }
}

const onMakeDecision = () => {
 const randomNum = Math.floor(Math.random() * app.options.length);
 const option = app.options[randomNum];
 alert(option);
};

const template = (
 <div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
  <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
  <button onClick={removeAll}>Remove All</button>
  <ol>
   {
    app.options.map((option) => {
     return <li key={option}>{option}</li>
    })
   }
  </ol>
  <form onSubmit={onFormSubmit}>
   <input type="text" name="option" />
   <button>Add options</button>
  </form>
 </div>
);

const user = {
 name: 'Brian',
 age: 20,
 location: 'Seattle'
};

const getLocation = (location) => {
 if (location) {
  return <p>Location: {location}</p>;
 }
}

const removeAll = () => {
 app.options = [];
 reRender();
}

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

const reRender = () => {
 const template = (
  <div>
   <h1>{app.title}</h1>
   {app.subtitle && <p>{app.subtitle}</p>}
   <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
   <button onClick={onMakeDecision}>What should I do?</button>
   <button onClick={removeAll}>Remove All</button>
   <ol>
    {
     app.options.map((option) => {
      return <li key={option}>{option}</li>
     })
    }
   </ol>
   <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>Add options</button>
   </form>
  </div>
 );

 ReactDOM.render(template, appRoot);
}
