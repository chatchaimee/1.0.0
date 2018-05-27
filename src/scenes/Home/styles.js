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
		background-attachment: fixed;
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
`;

export default HomeStyled;
