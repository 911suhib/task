function UserGreeting(props) {
    if (props.x) {
        return <h2>welcome {props.userName}</h2>;
    } else {
        return <h2>please login to continue</h2>;
    }
}
export default UserGreeting;