import { SVGProps } from 'react';

export function PasskeyIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M3 20v-2.8q0-.85.438-1.562T4.6 14.55q1.55-.775 3.15-1.162T11 13q.5 0 1 .038t1 .112q-.1 1.45.525 2.738T15.35 18v2zm16 3l-1.5-1.5v-4.65q-1.1-.325-1.8-1.237T15 13.5q0-1.45 1.025-2.475T18.5 10t2.475 1.025T22 13.5q0 1.125-.638 2t-1.612 1.25L21 18l-1.5 1.5L21 21zm-8-11q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m7.5 2q.425 0 .713-.288T19.5 13t-.288-.712T18.5 12t-.712.288T17.5 13t.288.713t.712.287"
			></path>
		</svg>
	);
}
