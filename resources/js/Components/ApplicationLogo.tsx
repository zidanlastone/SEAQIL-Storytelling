// import { SVGAttributes } from 'react';


export default function ApplicationLogo(props: any) {
    return (
        <img
            {...props}
            className={'h-8 w-auto' + props.className}
            src="https://training.qiteplanguage.org/assets2/images/logo.png"
        />
    );
}
