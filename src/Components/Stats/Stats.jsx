import React from 'react'

export default function Stats() {
    return (
        <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s" data-aos="" data-aos-duration="3000">
	<div className="container">
		<div className="row" >

			<div className="col-lg-3 stats">
				<img src="./images/Artboard 8@4x.png" alt="" />
				<div className="counting">2.2M+</div>
				<h5>Expenses Saved</h5>
			</div>

			<div className="col-lg-3 stats">
				<img src="./images/Artboard 7@4x.png" alt="" />
				<div className="counting"  >300+</div>
				<h5>Connections</h5>
			</div>

			<div className="col-lg-3 stats">
				<i className="fa fa-user" aria-hidden="true"></i>
				<div className="counting" >150+</div>
				<h5>Happy Students</h5>
			</div>

			


		</div>
	</div>
</section>
    )
}
