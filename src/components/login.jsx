import { dogs } from "../fakedatabase/dogs";





const Login = () => {
    return(<div>{dogs.map(dog => (
        <div>
            <img src={"/DogPics/" + dog.pic}
            width="250px"/>
            <p>{dog.name}</p>
        </div>
    ))}</div>)
    // return <div>login page</div>
}
export default Login;