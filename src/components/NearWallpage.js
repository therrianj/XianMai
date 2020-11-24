import React from 'react';

function NearWall(props) {
	
    return(
      <div>
      	<div className="row">
      		<p></p>
      	</div>
      	<div className="row">
      		<div className="col-md-1">
      		</div>

      		<div className="col-md-6" style={{color: '#ffffff'}}>
		        <h2>Near Wall Bar 泥窝窝</h2> 
		        <p>
		        Near Wall Bar, No. 40 the west part of south 
		        Shun Cheng street, inside of the south gate, city 
		        of Xi'an, Shaanxi province, China 710000
		        </p>
		        <p>  
		        中国陕西省西安市南门里南顺城街西段40号泥窝窝酒吧。邮编710000
		        </p>

				<p>ph. 02987219663</p>


				<p>Hours: 4pm-2am everyday</p>


				<p>Tips to find us:</p>  
				
					
			</div>
			<div className="col-md-4">
				<img src='assets/images/NWmap.jpg' width='99%'/>
			</div>
		</div>
      </div>

    );
}

export default NearWall;  