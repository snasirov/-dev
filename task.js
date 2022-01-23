import axios from "axios";

(async (number) => {
    const { data: users} = await axios(
        "https://jsonplaceholder.typicode.com/users/" + number
        );
    const { data: posts} = await axios(
        "https://jsonplaceholder.typicode.com/posts/" + number
        );

    console.log("users", users);
    console.log("posts", posts);
})(1);


