import { ReactNode } from 'react'

function InputGroup({ children, id = undefined, className }) {
    
    return (
        <>
            <div id={id} className={"input-group " + className}>
                {children}
            </div>
        </>
    );
}
InputGroup.propTypes = {
    children: ReactNode,
    id: String,
    className: String,
}
export default InputGroup;