import { HeadingInterface } from "../../interfaces/Typography.interface";

interface Iprops extends HeadingInterface {
    children: React.ReactNode;
}

  const Heading: React.FC<Iprops> = ({children}: Iprops)  =>{

    return (
        <h1>{children}</h1>
    )
}

export default Heading; 