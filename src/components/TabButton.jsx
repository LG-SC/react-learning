/* eslint-disable react/prop-types */

function TabButton(props) {
	const { children, id, onSelect, activeId = undefined} = props
	return (
		<li id={id}>
			<button className={activeId === id ? 'active': undefined} onClick={() => onSelect(props)}>{children}</button>
		</li>
	);
}
export default TabButton;