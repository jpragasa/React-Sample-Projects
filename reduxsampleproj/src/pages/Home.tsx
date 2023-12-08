import { useSelector } from "react-redux";

function Home() {
    const username = useSelector((state: any) => state.user.value.username);
    return (
        <section>
            <h1>Welcome {username}</h1>
            <h1>This is the Home Page</h1>
        </section>
    );
}

export default Home;