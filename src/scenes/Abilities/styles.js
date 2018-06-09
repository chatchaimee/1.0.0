import styled from 'styled-components';

const AbilitiesStyled = styled.div`
	.container {
		padding: 40px 0 0;
		display: block;
	}

	.content {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	.header {
		color: #22a39f;
		padding: 0 0 20px;
	}

	.sub-header {
		color: #22a39f;
		padding: 40px 0 30px;
		text-align: center;
	}

	.detail {
		color: #000;
		padding: 20px 0 20px;
	}

	.last-detail {
		color: #000;
		padding: 20px 0 50px;
	}

	.line {
		width: 80%;
		margin: 0 0 20px;
	}

	.skill-content {
		width: 80%;
	}

	.load-container {
		width: 100%;
		background-color: #ddd;
	}

	.skill-name {
		text-align: right;
		padding-right: 20;
		line-height: 1.5;
		color: white;
	}
`;

export default AbilitiesStyled;
