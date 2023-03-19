import logo from "../assets/img/logo.png";

export const HomeScreen = () => {
    return (
        <>
            <div className={"d-flex justify-content-center"}>
                <img width={500} height={500} src={logo} alt=""/>
            </div>
            <div className={"d-flex justify-content-center"}>
                <h1>Welcome to CRAIB Front End Development</h1>
            </div>
            <div className={"d-flex justify-content-center"}>
                <p><i>All copy rights are reserved by <a href="http://craib.iba-suk.edu.pk" target={"_blank"}>Visit Craib Center</a></i>
                </p>
            </div>
        </>
    )
}
