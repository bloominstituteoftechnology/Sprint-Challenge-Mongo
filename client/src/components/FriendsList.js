import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const FilmList = (props) => {
    console.log(props)

    return (
        <div className="friendslist-container">
            {props.films.map(e => {
                console.log(e._id)
                return (
                    < Card key={e._id} >
                        <CardImg top width="100%" src={`https://robohash.org/${e.description}?size=318x180`} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{e.description}</CardTitle>
                            <CardText>Budget: {e.budget.title}</CardText>
                            <CardText>Category: {e.category.title}</CardText>
                            <CardText>Money Spent: {e.amount}$</CardText>
                            <CardText></CardText>
                            {/* <CardText>{ghUser && ghUser}</CardText>
                            <CardText>{facebookUser && facebookUser}</CardText> */}
                            <button type="button" onClick={() => props.destroy(e._id)}>DELETE</button>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    )
}

export default FilmList