import React from "react"

function Header(props) {
    const onFormPage = props.selected ? true : false;
    const [isActive, setActive] = React.useState(true);
    console.log(onFormPage)
    function toggleButtonClass () {
        setActive(!isActive);
    }

    return (
        <header className="header">
            <div className="button-wrapper">
                
                <button 
                    className={onFormPage ? "active" : "not-active"}
                    onClick={onFormPage ? null : props.handleClick} 
                    >Edit CV
                </button>
                <button 
                    className={onFormPage ? "not-active" : "active"}
                    onClick={onFormPage ? props.handleClick : null}
                    >Generate CV
                </button>

            </div>
            <h1>CV Generator App</h1>
            <h3>by Manski117</h3>

        </header>
    )
}

export default Header