import ColorPicker from "./ColorPicker"
import RangeSoftness from "./RangeSoftness"

const ArgumentPicker = ({ setColor, setSoftness, setExtraFilter, setPattern }) => {

    return (
        <div className="flex pt-10 w-200">
            <div className="flex flex-wrap w-80">
                <ColorPicker fg="8A84F2" bg="FCEFE0" onClick={setColor} />
                <ColorPicker bg="8A84F2" fg="FCEFE0" onClick={setColor} />
                <ColorPicker fg="22746B" bg="FCEFE0" onClick={setColor} />
                <ColorPicker bg="22746B" fg="FCEFE0" onClick={setColor} />
                <ColorPicker fg="22746B" bg="8A84F2" onClick={setColor} />
                <ColorPicker bg="22746B" fg="8A84F2" onClick={setColor} />
            </div>
            <div className="pt-6">
                <RangeSoftness onChange={(e) => {
                    setSoftness(e.target.value)
                }} />
                <select className="w-full max-w-xs mt-8 border rounded select select-primary" defaultValue="Pick an additional effect" onChange={(e) => {
                    setExtraFilter(` url(#${e.target.value})`)
                }}>
                    <option value="">Pick an additional effect</option>
                    <option>sporcume</option>
                    <option>pixelate</option>
                    <option>sand</option>
                    <option>fe1</option>
                </select>
                <select className="w-full max-w-xs mt-8 border rounded select select-primary" defaultValue="Pick an additional pattern" onChange={(e) => {
                    setPattern(`url(#${e.target.value})`)
                }}>
                    <option value="">Pick an additional pattern</option>
                    <option value="waves">🌊</option>
                    <option>pasticcio</option>
                    <option>pallettoni</option>
                    <option>cerchietti</option>
                    <option>cipollotti</option>
                    <option>pluses</option>
                    <option>a</option>
                </select>
            </div>
        </div>
    )

}

export default ArgumentPicker