import { NormalButtonProps, ButtonFillProps} from "../../../interfaces";



export const Button: React.FC<NormalButtonProps> = ({onclick, children}: NormalButtonProps) => {

    const handleClick = () => onclick();

    return (
        <button 
        data-testid="button"
         onClick={() => handleClick()}
         >
             {children}
        </button>
    )
};





export const ButtonFill: React.FC<ButtonFillProps> = ({children, onclick, bgColor}: ButtonFillProps) => {

    const handleClick = () => onclick();
    return (
        <button
            data-testid="button-fill" 
            onClick={() => handleClick()}
        >
            {children}
        </button>
    )

}


