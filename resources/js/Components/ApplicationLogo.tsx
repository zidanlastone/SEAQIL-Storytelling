// import { SVGAttributes } from 'react';


export default function ApplicationLogo(props: any) {
    return (
        <img
            {...props}
            className={'h-8 w-auto mx-auto' + props.className}
            src="/image/sponsors/tutwuri-handayani.png"
        />
    );
}
