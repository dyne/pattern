
const ColorMatrix = ({ mode }) => {
    const REDS = "1 0 0 0 0"
    const GREENS = "0 1 0 0 0"
    const BLUES = "0 0 1 0 0"
    const ALLS = ".33 .33 .33 0 0"
    const ALPHA = "0 0 0 1 0"

    const modes = [REDS, GREENS, BLUES, ALLS]
    const V = modes[mode];
    const value = [V, V, V, ALPHA].join(" ");

    return (<feColorMatrix type="matrix" values={value} in="SourceGraphic" result="colormatrix" />)
}

const Filter = ({ bg, fg, softness, children }) => {
    const hexToRGB = (hex) => {
        hex = '0x' + hex
        let r = (hex >> 16 & 0xFF) / 255
        let g = (hex >> 8 & 0xFF) / 255
        let b = (hex & 0xFF) / 255
        return [r, g, b]
    }

    const [r1, g1, b1] = hexToRGB(bg)
    const [r2, g2, b2] = hexToRGB(fg)



    return (<>
        <filter id="sporco">
            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
            <feDisplacementMap in="SourceGraphic" scale="240" />
        </filter>
        <filter id="filter" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
            <ColorMatrix mode={softness} />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
                <feFuncR type="table" tableValues={`${r1}, ${r2}`} />
                <feFuncG type="table" tableValues={`${g1}, ${g2}`} />
                <feFuncB type="table" tableValues={`${b1}, ${b2}`} />
                <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
        <filter id="pixelate" x="0%" y="0%" width="100%" height="100%">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic" result="smoothed" />
            <feImage width="15" height="15" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC" result="displacement-map" />
            <feTile in="displacement-map" result="pixelate-map" />
            <feDisplacementMap in="smoothed" in2="pixelate-map" xChannelSelector="R" yChannelSelector="G" scale="50" result="pre-final" />
            <feComposite operator="in" in2="SourceGraphic" />
        </filter>
        <filter id="sand" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" result="f1" stitchTiles="noStitch" baseFrequency="0.6" numOctaves="1" seed="0" />
            <feColorMatrix type="matrix" values="-18 0 0 0 8     -18 0 0 0 8     -18 0 0 0 8     0 0 0 0 1" in="f1" result="f2" />
            <feColorMatrix type="luminanceToAlpha" in="f2" result="f3" />
            <feComposite in="SourceGraphic" in2="f3" result="f4" operator="in" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.22      0 1 0 0 0.22      0 0 1 0 0.22      0 0 0 1 0" in="f4" result="f5" />
            <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="f5" />
            </feMerge>

        </filter>
        <filter id="fe1">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="0.00001 9.9999999" numOctaves="1" result="warp">
                <animate attributeName="baseFrequency" from="0.00001 9.9999" to="0.00001 0.001" dur="2s" repeatCount="indefinite" />
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
        </filter>
        <pattern
            id='a'
            patternUnits='userSpaceOnUse'
            width='22' height='22'
            patternTransform='scale(3) rotate(150)'>
            <rect x='0' y='0' width='100%' height='100%' fill={`rgba(${r1},${g1},${b1},.01)`} />
            <path d='M10-6V6M10 14v12M26 10H14M6 10H-6' transform='translate(1,0)' strokeLinecap='square' strokeWidth='5' stroke={`rgba(${r2},${g2},${b2},.01)`} fill='none' />
        </pattern>

    </>)
}

export default Filter