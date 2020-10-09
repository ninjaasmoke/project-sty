import React from 'react';
import { Jumbotron } from 'reactstrap';

export default function headerComp() {
    return (
        <div>
            <header className="nav">
                <div className="greeting">
                    Hey there!
                </div>
            </header>
            <Jumbotron>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quasi? Quam amet neque quos! Quo earum recusandae beatae eligendi pariatur qui, ipsa distinctio animi voluptatibus necessitatibus voluptas aut facere tempora.
                </p>
            </Jumbotron>
        </div>
    )
}
