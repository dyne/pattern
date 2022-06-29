import { Widget } from "@uploadcare/react-widget";

const ImagePicker = ({setImage, setUuid}) => {
    const onChange = (f) => {
        setUuid(f.uuid);
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(f.sourceInfo.file);
    };

    return (
        <>
         <Widget 
            publicKey="5830d18cadbb13d74dfe"
            onChange={onChange} 
            clearable />
        </>

    )

}

export default ImagePicker;