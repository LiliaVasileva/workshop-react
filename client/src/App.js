import {useEffect, useState} from "react";

import * as userService from "./services/userService";
import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {UserSection} from "./components/user-section/UserSection";




function App() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll()
            .then(users =>setUsers(users));
    }, []);

    return (
        <div className="App">
            <Header/>

            <main className="main">

                <section className="card users-container">
                    <Search/>
                    <UserSection users={users} setStateUsers={setUsers}/>

                </section>

            </main>

            <Footer/>
        </div>
    );
}

export default App;
