const RangeSoftness = ({ onChange }) => {
    return (
        <div>
            <input type="range" min="0" max="3" onChange={onChange} className="range" />
            <div className="flex justify-between w-full px-2 text-xs">
                <span className="text-2xl">🍓</span>
                <span className="text-2xl">🥦</span>
                <span className="text-2xl">🫐</span>
                <span className="text-2xl">🍭</span>
            </div>
        </div>
    )
}

export default RangeSoftness