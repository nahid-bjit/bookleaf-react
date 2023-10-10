import "./header.css";
import Button from "./button";
const Header = () => {
    return (
        <>
            <div
                // style={{
                //     display: "flex",
                //     flexDirection: "row",
                //     justifyContent: "space-between",
                //     padding: "10px 90px",
                //     backgroundColor: "skyblue"
                className="header-style"

            >
                <div>Home</div>
                <div>Sign-in</div>
                <div>Sign-up</div>
                <Button />

            </div >
        </>

    );
};

export default Header;