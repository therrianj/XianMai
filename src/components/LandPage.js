import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { MAIN } from '../shared/mainLand';

class Land extends React.Component {
  constructor(props){
      super(props);

	this.state = {	
				selectedD: null,
				
			}
		}

		onDSelect(dish) {
			this.setState({selectedD: dish});
		}

  render(){
  	const main = this.props.main.map((dish) => {
				return (
					<div key={dish.id} className="col-12 col-md-3 m-1">
						<Card  onClick={() => this.onSelect(dish)}>						
							<CardImg width="100%" object src={dish.image} alt={dish.name}/>							
							<CardImgOverlay>
								<CardTitle>{dish.name}</CardTitle>
							</CardImgOverlay>
						</Card>
					</div>

					);
				});
  				return (
				<div className="container">
					<div className="row">			
							{main}
					</div>
					
				</div>

			 );
  			}
  		}

export default Land;