/* eslint-disable react/prop-types */

function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}
export default Tabs;