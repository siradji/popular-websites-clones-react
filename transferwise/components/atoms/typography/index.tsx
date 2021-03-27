import { ParagraphInterface, HeadingInterface, TypographyInterface } from "../../../interfaces/";



  export const Heading: React.FC<HeadingInterface> = ({children}: HeadingInterface)  =>{

    return (
        <h1>{children}</h1>
    )
}

export const Paragraph: React.FC<ParagraphInterface> = ({variant, children}: ParagraphInterface) => {
    return (
        <p>{children}</p>
    )
}


export const HeadingSmall: React.FC<TypographyInterface> = ({children}: TypographyInterface) => {
    return (
        <h2>{children}</h2>
    )
}


// export default ; 