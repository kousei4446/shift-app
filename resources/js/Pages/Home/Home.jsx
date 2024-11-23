import { useEffect, useState } from "react";
import Head from "./Head";
import Sidevar from "./Sidevar";

function Home() { // csrfTokenをpropsから受け取る
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div>
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}
            <p>Welcome Home</p>
        </div>
    );
}

export default Home;
