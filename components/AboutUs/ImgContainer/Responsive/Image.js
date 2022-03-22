import React from 'react'
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import Desktop from './Desktop';
import Mobile from './Mobile';
import Tablets from './Tablets';

export default function Image() {
	const tablet = useMediaQuery("(max-width: 768px)");
	const mobile = useMediaQuery("(max-width: 425px)");
	if(mobile) {
		return <Mobile />
	}

	if(tablet) {
		return <Tablets />
	}
	return (
		<Desktop />
	)
}
