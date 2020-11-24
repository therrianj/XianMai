import React from 'react';

function Mandy(props) {
	
    return(
      <div>
      	<div className="row">
      		<p></p>
      	</div>
      	<div className="row">
      		<div className="col-md-1">
      		</div>

      		<div className="col-md-6" style={{color: '#ffffff'}}>
		        <h2>Xian Brewery 仙麦-曼蒂广场</h2> 
		        <p>
					Mandy Plaza, No.9 Yan Nan Road, Qu Jiang District, Xi'an
				</p>
				<p>
					西安曲江新区雁南一路9号曼蒂广场一层F1041---二层F2008-2011号
					F1041—F2008-2011, 
				</p>

				<p>ph. 02989557872</p>

				<p>hours:</p>

				<p>Sun-Th 4pm-2am</p>

				<p>Fr-Sat 4pm-3am</p>

				<p>Tips to find us:</p>  
				<p>
				Closest Metro Stop: 
				DaYanTa North (Line 3) 
				DaTang FuRongYuan (Line 4)
				</p>
				
				<p>
				We are on the courtyard side (West) of Mandy Plaza.  
				There is also a second floor entrance toward the back 
				of the building.  Underground parking is available.
				</p>
					
			</div>
			<div className="col-md-4">
				<img src='assets/images/Mandymap.png' width='99%'/>
			</div>
		</div>
      </div>

    );
}

export default Mandy;  