const ColorPicker = ({ fg, bg, onClick }) => {
    const styles = {
        borderRightColor: `#${fg}`,
        borderTopColor: `#${bg}`,
        borderBottomColor: `#${fg}`,
        borderLeftColor: `#${bg}`,
        borderWidth: "38px",
        borderStyle: "solid",
        height: "0px",
        width: "0px"
    }
    return <button onClick={() => onClick(fg, bg)} style={styles} className="m-2 avatar mask mask-squircle"></button>
}

export default ColorPicker