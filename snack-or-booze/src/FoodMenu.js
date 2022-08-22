import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks , drinks}) {

  const location = useLocation()
  const item = location.state?.item
  // console.log(item, 'itemmmmmmmmmmmmmmmmmmmm bitssh')
  // console.log('inside foodmenu')
  // console.log(snacks, drinks)

  let clickedItem = item == 'snacks' ? snacks : drinks;

  let numberOfItems = clickedItem.length

  // console.log(clickedItem, 'clickeditem!!!!!!!!!!!')
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu 
          </CardTitle>
          <CardText>
            NUMBER OF ITEM: {numberOfItems}
          </CardText>
          <ListGroup>
            {clickedItem.map(itm => (
              <Link to={`/items/${itm.id}`} key={itm.id} state={{item: clickedItem}}>
                <ListGroupItem>{itm.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
