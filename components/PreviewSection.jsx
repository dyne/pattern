const PreviewSection = ({name, description, children}) => {
    return (
        <>
            <div id={name} className="pt-20">
                <h2 className="inline-flex items-baseline text-4xl font-bold">
                    <img src={`/logos/${name}.svg`} className="self-center w-8 h-8 mx-1"/> &nbsp; 
                    <span className="capitalize">{name}</span> &nbsp; images
                </h2>
                <p className="max-w-lg py-5">{description}</p>
                <div className="grid grid-cols-3 gap-20">
                {children}
                </div>
            </div>
        </>
    )
}

export default PreviewSection