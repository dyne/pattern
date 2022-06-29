import ColorPicker from "./ColorPicker"
import RangeSoftness from "./RangeSoftness"

const ArgumentPicker = ({ setColor, setSoftness }) => {

    return (
        <div>
            <ColorPicker fg="8A84F2" bg="FCEFE0" onClick={setColor} />
            <ColorPicker bg="8A84F2" fg="FCEFE0" onClick={setColor} />
            <ColorPicker fg="22746B" bg="FCEFE0" onClick={setColor} />
            <ColorPicker bg="22746B" fg="FCEFE0" onClick={setColor} />
            <ColorPicker fg="22746B" bg="8A84F2" onClick={setColor} />
            <ColorPicker bg="22746B" fg="8A84F2" onClick={setColor} />

            <RangeSoftness onChange={(e) => {
                setSoftness(e.target.value)
            }} />
        </div>

    )

}

export default ArgumentPicker