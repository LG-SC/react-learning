/* eslint-disable react/prop-types */

function Section({ children, title, ...rest }) {
    return (
        <section {...rest}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;