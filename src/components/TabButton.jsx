/* eslint-disable react/prop-types */

function TabButton(props) {
	const { children, id, onSelect } = props
	return (
		<li id={id}>
			<button onClick={() => onSelect(props)}>{children}</button>
		</li>
	);
}
export default TabButton;