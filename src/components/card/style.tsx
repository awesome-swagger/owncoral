/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled';
import { css } from "@emotion/react";

interface CardProps {
	hasLink: boolean,
	width: number,
	height: number
}
export const Card = styled.div<CardProps>`
	position: relative;

	margin: 10px;
	background-color: var(--light-color);

	/* border: 2px solid rgba(0, 0, 0, 0.3); */
	border-radius: 16px;
	box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
	overflow: hidden;
	transition: all 0.15s ease-in-out;

	${(props) => 
		props.hasLink &&
		css`
			cursor: pointer;

			:hover {
				box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
				transform: scale(1.01);
			}

			/* Disable hover on mobile */
			@media (pointer: coarse) {
				:hover {
					box-shadow: inherit;
					transform: none;
				}
			}
		`}

	${(props) => props.width &&	css`width: ${props.width}px;`}
	${(props) => props.height &&	css`height: ${props.height}px;`}
`;