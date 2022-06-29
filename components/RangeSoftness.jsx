const RangeSoftness = ({ onChange }) => {
    return (
        <>
            <input type="range" min="0" max="3" onChange={onChange} className="range" />
            <div className="flex justify-between w-full px-2 text-xs">
                <span className="text-2xl">🍓</span>
                <span className="text-2xl">🥦</span>
                <span className="text-2xl">🫐</span>
                <span className="text-2xl">🍭</span>
            </div>
        </>
    )
}

export default RangeSoftness