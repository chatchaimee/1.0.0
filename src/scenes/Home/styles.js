import styled from 'styled-components';

const HomeStyled = styled.div`
	.container {
		width: 100%;
		height: 100vh;
		position: relative;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('static/images/Home/home.jpg');
	}

	@media (min-width: 992px) {
		.bg-fixed {
			background-attachment: fixed;
		}
	}

	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		align-item: center;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		color: #fff;
	}

	.sub-header {
		color: rgba(255, 255, 255, 0.8);
	}

	/*----- Start button mouse -----*/
	.btn-scroll a {
		padding-top: 60px;
	}

	.btn-scroll a span {
		position: absolute;
		bottom: 50px;
		left: 50%;
		width: 30px;
		height: 50px;
		margin-left: -15px;
		border: 2px solid #fff;
		border-radius: 50px;
		box-sizing: border-box;
		z-index: 1;
	}

	.btn-scroll a span::before {
		position: absolute;
		top: 10px;
		left: 50%;
		content: '';
		width: 6px;
		height: 6px;
		margin-left: -3px;
		background-color: #fff;
		border-radius: 100%;
		-webkit-animation: sdb 2s infinite;
		animation: sdb 2s infinite;
		box-sizing: border-box;
	}

	@-webkit-keyframes sdb {
		0% {
			-webkit-transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			-webkit-transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes sdb {
		0% {
			transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	/*----- End button mouse -----*/
`;

export default HomeStyled;
