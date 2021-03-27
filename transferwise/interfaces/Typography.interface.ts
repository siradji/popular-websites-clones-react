type Variant = 'light' | 'bold' | 'semi-bold'
export interface TypographyInterface {
    color: string
    children: React.ReactNode;
}

export interface HeadingInterface extends TypographyInterface {
   
}


export interface ParagraphInterface extends TypographyInterface {
    variant:Variant
}

