import React from "react";
import { useNavigate, useParams, useLocation} from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ drinks, snacks, cantFind }) {
  const { id } = useParams();
  const navigate = useNavigate()
  const location = useLocation()
  const choosenItem = location.state?.item
  
  // console.log(id, drinks, snacks, choosenItem)

  console.log(id)
  // let choice;
  // if (id) {
  //   console.log('sima')
  //   choice = choosenItem.find(
  //     it => it.id === id
  //   );
    
  // }
  
  

  // let choice;
  // function ty(){
  
  //   choice = choosenItem.find(itm => itm.id === id )
  //   console.log('huhhuh')
  //   if (!choice) return navigate(cantFind) ;
  // }
  // ty()


  
  let choice = choosenItem.find(itm => itm.id === id )

  // let choice;
  // if(!choosenItem.find(itm => itm.id === id )){
  //   console.log('iiiiiiiiiiiiiiiiiiiiiiiii')
  //   navigate('/')
  // }else{
  //   choice = choosenItem.find(itm => itm.id === id )
  // }

  // let choice;
  // try{
  //   for(let i = 0; i < choosenItem.length; i++){
  //     if(choosenItem[i].id === id){
  //       console.log('yessssssssssss')
  //       choice = choosenItem[i]
  //     }else{
  //       navigate('/')
  //       choice=choosenItem[i]
  //       console.log('noooooooooo')
  //     }
  //   }
  // }catch(e){
  //   console.log('meeka')
  //   navigate('/')
  // }

  // let choice = choosenItem.map(itm => {
  //   console.log('weeen')
  //   if( itm.id === id){
  //     return itm
  //   }else{
  //     console.log('huh huh huh huh')
      
  //   }
  // })
  
  
  console.log('choice')
  if (!choice) return navigate(cantFind) ;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {choice.name}
          </CardTitle>
          <CardText className="font-italic">{choice.description}</CardText>
          <p>
            <b>Recipe:</b> {choice.recipe}
          </p>
          <p>
            <b>Serve:</b> {choice.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
