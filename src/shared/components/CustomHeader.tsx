interface Props{
    title: string;
    description?: string;
}


export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
            <h1>{title}</h1>
            {/* esto lo que hace es si la descripción está presente*/}
            {description && <p>{description}</p>}
           
    </div>
  )
}
