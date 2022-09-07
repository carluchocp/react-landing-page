import React from "react";
import { Navbar } from "../component/navbar.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";
import { GroupOfCards } from "../component/groupOfCards.jsx";
import { Footer } from "../component/footer.jsx";

let jumbotronDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores. Reiciendis doloremque blanditiis dolores molestiae minima!"

let cardProps1 =
{
    title: "Card Title",
    image: "https://picsum.photos/500/325",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores."
};

let cardProps2 =
{
    title: "Card Title",
    image: "https://picsum.photos/500/325",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores."
};

let cardProps3 =
{
    title: "Card Title",
    image: "https://picsum.photos/500/325",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores."
};

let cardProps = [cardProps1, cardProps2, cardProps3]

export const Home = () => {
    return (
        <>
            <div className="container-fluid row">
                <Navbar />
                <Jumbotron title="A Warm Welcome!" description={jumbotronDescription} />
                <GroupOfCards cardData={cardProps} />
            </div>
            <Footer />
        </>
    );
};