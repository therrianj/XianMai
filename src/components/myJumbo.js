import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ExmyJumbo1 = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div className="row">
            <div className="col-5">
              <img alt="logo" src="assets/images/logo-hei.png" width="100%"/>
              
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-4">
              <div> From our humble roots opening Near Wall Bar in 2014 to Xian Brewery's 
              recent Live House expansion overlooking Zhu Que Gate in 2019, we've been
              on quite a ride. And now a brand new website! There's nothing we can't do.
              </div>
            </div>
          </div>
          
        </Container>
      </Jumbotron>
    </div>
  );
};
;
export default ExmyJumbo1