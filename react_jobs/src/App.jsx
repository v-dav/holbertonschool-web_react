const App = () => {
	const names = ["Brad", "Mary", "Joe", "Sarah"]
	const loggedIn = true;
	const styles = {
		color: 'red',
		fontSize: '55px'
	}
	if (loggedIn) {
	return <div className="text-5xl">
		<ul>
		{names.map((name, index) => (<li style={styles} key={index}>{ name }</li>))}
		</ul>
	</div>
	} else {
		return <div className="text-5xl">Not loggged in</div>
	}
}

export default App
