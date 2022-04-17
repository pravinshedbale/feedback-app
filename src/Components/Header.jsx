const Header = ({ text, bgColor, textColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );
};

Header.defaultProps = {
    text: "Feedback Application",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "white",
};

export default Header;
