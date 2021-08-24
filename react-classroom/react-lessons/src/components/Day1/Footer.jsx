const Footer = (props) => {
    console.log(props)
    return(
        <div>
            <p>© EFA 2021 {new Date().getFullYear()}
            </p>
            <p>new Date: { props.date}</p>
        </div>
    )
};


export default Footer;