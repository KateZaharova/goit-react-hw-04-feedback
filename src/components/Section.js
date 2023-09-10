export const Section = ({ title, children }) => {
    return (
        <div className='section'>
            <h2 className='section-title'>{title}</h2>
            {children}
        </div>
    )
};
    