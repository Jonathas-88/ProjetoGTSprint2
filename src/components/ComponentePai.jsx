const ComponentePai = ({title = "Coleções em Destaque", children}) => {
    return(
        <>
        <h1>{title}</h1>
        <p>Aqui tem conteúdo em volta do filho</p>
        {children}
        <p>Aqui tem conteúdo em volta do filho</p>
        </>
    )
}

export default ComponentePai