class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				{console.log(this.state.visibility)}
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Detail' : 'Show Detail'}
				</button>
				{this.state.visibility && <p>Show some information</p>}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const showDetail = () => {
// 	visibility = !visibility;
// 	render();
// };

// const render = () => {
// 	const template = (
// 		<div>
			// <h1>Visibility Toggle</h1>
			// <button onClick={showDetail}>
			// 	{visibility ? 'Hide Detail' : 'Show Detail'}
			// </button>
			// {visibility && <p>Show some information</p>}
			// {visibility ? <p>foo</p> : <h1>bar</h1>}
// 		</div>
// 	);
// 	const appRoot = document.getElementById("app");
// 	ReactDOM.render(template, appRoot);
// }

// render();
