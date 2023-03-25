/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<footer className='py-4'>
				<div className='container-xxl'>
					<div className='row align-items-center'>
						<div className='col-5'>
							<div className='footer-top-data d-flex gap-30 align-items-center'>
								<img src='images/newsletter.png' alt='newsletter' />
								<h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
							</div>
						</div>
						<div className='col-7'>
							<div className='input-group'>
								<input
									type='text'
									className='form-control py-1 newsletter'
									placeholder='Your Email Address.'
									aria-label='Your Email Address.'
									aria-describedby='basic-addon2'
								/>
								<span className='input-group-text p-2' id='basic-addon2'>
									Subscribe
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-4'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-4'>
							<h4 className='text-white mb-4'>Contact Us</h4>
							<div className='text-white fs-6'>
								<address>
									1326 Felosa Drive Los Angeles <br /> CA 90046
								</address>
								<a href='tel:3239664558' className='mt-3 d-block mb-1 text-white'>
									+1323-966-4558
								</a>
								<a href='mailto:DannySRidge@rhyta.com' className='mt-2 d-block mb-4 text-white'>
									DannySRidge@rhyta.com
								</a>
								<div className='social_icons d-flex gap-30 align-items-center'>
									<a href='/' className='text-white'>
										<BsFacebook className='fs-4' />
									</a>
									<a href='/' className='text-white'>
										<BsInstagram className='fs-4' />
									</a>
									<a href='/' className='text-white'>
										<BsYoutube className='fs-4' />
									</a>
									<a href='/' className='text-white'>
										<BsPinterest className='fs-4' />
									</a>
								</div>
							</div>
						</div>
						<div className='col-3'>
							<h4 className='text-white mb-4'>Information</h4>

							<div className='footer-links d-flex flex-column'>
								<Link to='' className='text-white py-2 mb-1'>
									Privacy & Policy
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Refund Policy
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Shipping Policy
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Terms & Condition
								</Link>
							</div>
						</div>
						<div className='col-3'>
							<h4 className='text-white mb-4'>Account</h4>

							<div className='footer-links d-flex flex-column'>
								<Link to='' className='text-white py-2 mb-1'>
									About us
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Faq
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Contact
								</Link>
							</div>
						</div>
						<div className='col-2'>
							<h4 className='text-white mb-4'>Quick Links</h4>
							<div className='footer-links d-flex flex-column'>
								<Link to='' className='text-white py-2 mb-1'>
									Laptops
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Headphones
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Tablets
								</Link>
								<Link to='' className='text-white py-2 mb-1'>
									Watch
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-4'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<p className='text-center mb-0 text-white'> &copy; {new Date().getFullYear()} Powered by Ecommerce</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
