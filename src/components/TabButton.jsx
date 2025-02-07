/* eslint-disable react/prop-types */

function TabButton(props) {
	const { children, id, onSelect, isIdSelected } = props
	return (
		<li id={id}>
			<button className={isIdSelected === id ? 'active': undefined} onClick={() => onSelect(props)}>{children}</button>
		</li>
	);
}
export default TabButton;