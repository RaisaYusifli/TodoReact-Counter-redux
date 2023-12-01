import React from 'react'

interface IButtonProp{
    variant:'solid'|'outline'|'gost',
    onClick:()=>void;
}
// export const Button=(props:IButtonProp)=>{
//     const {variant}=props;
//     if(variant==='gost'){
//         return <button>Gost</button>
//     }
//     if(variant==='outline'){
//         return <button>Outline</button>
//     }

//     return <button onClick={props.onClick}>Solid</button>
// }

//functional compoenetsen ve props un IButtonProp u gosterir
export const Button :React.FC<IButtonProp>=(props)=>{
    const {variant}=props;
    if(variant==='gost'){
        return <button>Gost</button>
    }
    if(variant==='outline'){
        return <button>Outline</button>
    }

    return <button onClick={props.onClick}>Solid</button>
}





