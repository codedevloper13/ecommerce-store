/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<section className='home-wrapper-1 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-6'>
							<div className='main-banner  position-relative py-3'>
								<img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner' />
								<div className='main-banner-content position-absolute'>
									<h4>SUPERCHARGED FOR PROS.</h4>
									<h5>ipad S13+ Pro.</h5>
									<p>From $999.00 or $41.62/mo</p>
									<Link to='' className='button'>
										Buy now
									</Link>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='d-flex flex-wrap justify-content-between gap-10 align-items-center py-3'>
								<div className='small-banner  position-relative '>
									<Link to='' className='category_name'>
										<img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner' />
										<div className='small-banner-content position-absolute'>
											<h4>BEST SALE</h4>
											<h5>Laptops Max</h5>
											<p>
												From $999.00 or <br /> $41.62/mo
											</p>
										</div>
									</Link>
								</div>
								<div className='small-banner  position-relative '>
									<Link to='' className='category_name'>
										<img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner' />
										<div className='small-banner-content position-absolute'>
											<h4>NEW ARRIVALS</h4>
											<h5>Smart Watch</h5>
											<p>
												From $999.00 or <br /> $41.62/mo
											</p>
										</div>
									</Link>
								</div>
								<div className='small-banner  position-relative '>
									<Link to='' className='category_name'>
										<img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner' />
										<div className='small-banner-content position-absolute'>
											<h4>BEST SALE</h4>
											<h5>Tab</h5>
											<p>
												From $999.00 or <br /> $41.62/mo
											</p>
										</div>
									</Link>
								</div>
								<div className='small-banner  position-relative'>
									<Link to='' className='category_name'>
										<img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner' />
										<div className='small-banner-content position-absolute'>
											<h4>BEST SALE</h4>
											<h5>Headphone</h5>
											<p>
												From $999.00 or <br /> $41.62/mo
											</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Shipping Section Start */}
			<section className='home-wrapper-2 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<div className='service d-flex align-items-center justify-content-between'>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service.png' alt='services' />
									<div>
										<h6>Free Shipping</h6>
										<p className='mb-0'>From all orders Over $500</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-02.png' alt='services' />
									<div>
										<h6>Daily Surprise Offer</h6>
										<p className='mb-0'>Save upto 25% off</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-03.png' alt='services' />
									<div>
										<h6>Support 24/7</h6>
										<p className='mb-0'>shop with an expert</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-04.png' alt='services' />
									<div>
										<h6>Affordable Prices</h6>
										<p className='mb-0'>Get factory Direct Price</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-05.png' alt='services' />
									<div>
										<h6>Secure Payments</h6>
										<p className='mb-0'>100% Protected Payments</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Shipping Section End */}

			{/* Slider Section Start */}
			<section className='home-wrapper-3 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
								<div className='carousel-inner'>
									<div className='carousel-item active'>
										<img src='images/slider/1.jpg' className='d-block w-100' alt='...' />
									</div>
									<div className='carousel-item'>
										<img src='images/slider/2.jpg' className='d-block w-100' alt='...' />
									</div>
									<div className='carousel-item'>
										<img src='images/slider/3.jpg' className='d-block w-100' alt='...' />
									</div>
									<div className='carousel-item'>
										<img src='images/slider/4.jpg' className='d-block w-100' alt='...' />
									</div>
								</div>
								<button
									className='carousel-control-prev'
									type='button'
									data-bs-target='#carouselExampleControls'
									data-bs-slide='prev'>
									<span className='carousel-control-prev-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Previous</span>
								</button>
								<button
									className='carousel-control-next'
									type='button'
									data-bs-target='#carouselExampleControls'
									data-bs-slide='next'>
									<span className='carousel-control-next-icon' aria-hidden='true'></span>
									<span className='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Slider Section End */}

			{/* Category Section Start */}
			<section className='home-wrapper-3 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<div className='categories d-flex justify-content-between flex-wrap align-content-center'>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Cameras</h6>
										<p>10 Items</p>
									</div>
									<img src='images/camera.jpg' alt='camera' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Electronics</h6>
										<p>10 Items</p>
									</div>
									<img src='images/Electronics.png' alt='camera' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Smart Tv</h6>
										<p>10 Items</p>
									</div>
									<img src='images/tv.jpg' alt='tv' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Music & Gaming</h6>
										<p>10 Items</p>
									</div>
									<img src='images/headphone.jpg' alt='watch' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Grocery</h6>
										<p>10 Items</p>
									</div>
									<img src='images/Grocerry.png' alt='camera' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Fashions</h6>
										<p>10 Items</p>
									</div>
									<img src='images/Fashion.png' alt='camera' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Appliances</h6>
										<p>10 Items</p>
									</div>
									<img src='images/appliance.png' alt='tv' />
								</div>
								<div className='d-flex gap align-items-center'>
									<div>
										<h6>Mobiles</h6>
										<p>10 Items</p>
									</div>
									<img src='images/Mobile.png' alt='watch' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Category Section End */}
		</>
	);
};

export default Home;
