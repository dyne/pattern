import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Filter from "./Filter"
import RangeSoftness from "./RangeSoftness"
import ColorPicker from "./ColorPicker"

const Crop = ({ image }) => {
    const cropperRef = useRef(null);
    const [baseImage, setBaseImage] = useState();
    const [softness, setSoftness] = useState(2);
    const [fg, setFg] = useState("8A84F2");
    const [bg, setBg] = useState("FCEFE0");


    const onCrop = () => {
        const imageElement = cropperRef.current;
        const cropper = imageElement.cropper;
        setBaseImage(cropper.getCroppedCanvas().toDataURL());
    };

    const setColor = (f, b) => {
        setFg(f);
        setBg(b);
    }


    return (
        <div className="flex gap-6">
            <div>
                <Cropper
                    src={image}
                    style={{ height: 200, width: "100%" }}
                    // Cropper.js options
                    initialAspectRatio={16 / 9}
                    guides={true}
                    crop={onCrop}
                    ref={cropperRef}
                />

                <div>
                    <ColorPicker fg="8A84F2" bg="FCEFE0" onClick={setColor} />
                    <ColorPicker bg="8A84F2" fg="FCEFE0" onClick={setColor} />
                    <ColorPicker fg="22746B" bg="FCEFE0" onClick={setColor} />
                    <ColorPicker bg="22746B" fg="FCEFE0" onClick={setColor} />
                    <ColorPicker fg="22746B" bg="8A84F2" onClick={setColor} />
                    <ColorPicker bg="22746B" fg="8A84F2" onClick={setColor} />
                </div>

                <RangeSoftness onChange={(e) => {
                    setSoftness(e.target.value)
                }} />
            </div>
            <div className="cropper-bg">
                <svg viewBox="0 0 800 449" width="800" height="449">
                    <defs>
                        <Filter softness={softness} bg={bg} fg={fg} />
                    </defs>
                    <g>
                        <image
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            xlinkHref={baseImage}
                            filter="url(#filter) url(#fe1)" />
                    </g>
                </svg>
                <ColorPicker fg={fg} bg={bg} />
            </div>
        </div>
    );
};

export default Crop;