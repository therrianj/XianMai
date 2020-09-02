import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ExBeer from './beerCarousel';

function Beer(props) {
	
    return(
   	<div>
	      <div className='row'>
	      	<div className="col-md-1">
	      	</div>
	      	<div className="col-md-10">
		      <Card>
		        <CardImg top /> <img width="100%" src="/assets/images/sixcupslogo.png" alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>六小杯</h3></CardTitle>
		          <CardSubtitle><h4>Beer Sampler</h4></CardSubtitle>
		          <CardText>Our most popular starter. Try 6 of our freshest beers of various styles and flavors.</CardText>
		        </CardBody>
		      </Card>
		    </div>
		    <div className="col-md-6">
		      <Card>
		        <CardImg top width="100%" src='assets/images/classicwit.jpeg' alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>经典小麦</h3></CardTitle>
		          <CardSubtitle><h4>Classic Wit</h4></CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		        </CardBody>
		      </Card>
		    </div>
		    <div className="col-md-6">
		      <Card>
		        <CardImg top width="100%" src='assets/images/citraIPA.jpeg' alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>经典小麦</h3></CardTitle>
		          <CardSubtitle><h4>Citra IPA</h4></CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		        </CardBody>
		      </Card>
		    </div>
		      <Card>
		        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>经典小麦</h3></CardTitle>
		          <CardSubtitle><h4>God's Hand IPA</h4></CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		        </CardBody>
		      </Card>
		    <div className="col-md-6">
		      <Card>
		        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>经典小麦</h3></CardTitle>
		          <CardSubtitle><h4>Suan Mei Tang Wheat</h4></CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		        </CardBody>
		      </Card>
		    </div>
		    <div className="col-md-6">
		      <Card>
		        <CardImg top width="100%" src='assets/images/milkStout.jpeg' alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>经典小麦</h3></CardTitle>
		          <CardSubtitle><h4>Milk Stout</h4></CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		        </CardBody>
		      </Card>
		    </div>
		      <Card>
		        <CardImg top width="100%" src='assets/images/coffeeStout.jpeg' alt="Card image cap" />
		        <CardBody>
		          <CardTitle><h3>经典小麦</h3></CardTitle>
		          <CardSubtitle><h4>Coffee Stout</h4></CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		        </CardBody>
		      </Card>
		</div>
    </div>
  );
};


export default Beer;  