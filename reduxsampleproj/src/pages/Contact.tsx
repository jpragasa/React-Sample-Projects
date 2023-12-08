import { useSelector } from "react-redux";

function Contact() {
    const username = useSelector((state: any) => state.user.value.username);
    return(
        <h1>Welcome {username}<br/>This is the Contact Page</h1>
    );
}

export default Contact;