import ImageContext from "../components/ImageContext"
import Filter from "./Filter"
import { saveSvgAsPng } from "save-svg-as-png"

const Preview = ({ title = "", tip, w, h }) => {
    const icon = `/positions/${title.replaceAll(" ", "-")}.svg`;
    return (
        <ImageContext.Consumer>
            {image =>
                <div>
                    <p className="py-4 text-xl font-bold capitalize">{title.split(" ").slice(1).join(" ")}</p>

                    <div className="flex items-center">
                        <img src={icon} className="m-2 max-h-12" />
                        <div className="pl-3 text-2xs">{tip}</div>
                    </div>

                    <div className="card card-compact">
                        <figure>
                            <svg viewBox={`0 0 ${w} ${h}`} id={title}>
                                <defs>
                                    <Filter softness={image.softness} bg={image.bg} fg={image.fg} />
                                </defs>
                                <g>
                                    <image
                                        x="0%"
                                        y="0%"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid meet"
                                        xlinkHref={`https://ucarecdn.com/${image.uuid}/-/scale_crop/${w + 1}x${h + 1}/smart/center`}
                                        filter={`url(#filter)${image.extraFilter}`} />
                                </g>
                            </svg>
                        </figure>
                        <div className="card-body">
                            <p></p>
                            <div className="justify-end card-actions">
                                <div className="badge badge-outline">{w}x{h}</div>
                                <button className="btn btn-primary btn-xs" onClick={() => { 
                                    saveSvgAsPng(document.getElementById(title), `${title.replaceAll(" ", "-")}-${image.uuid}-.png`)
                                }}>Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </ImageContext.Consumer>
    )
}

export default Preview;