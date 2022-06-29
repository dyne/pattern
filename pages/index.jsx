import Head from 'next/head'
import { useState } from 'react'
import ArgumentPicker from "../components/ArgumentPicker"
import ImagePicker from "../components/ImagePicker"
import Preview from "../components/Preview"
import PreviewSection from '../components/PreviewSection'
import ImageContext from "../components/ImageContext"

export default function Home() {
    const [uuid, setUuid] = useState("b555ca32-eee0-48cf-a943-175bc1498367")
    const [softness, setSoftness] = useState(2);
    const [fg, setFg] = useState("8A84F2");
    const [bg, setBg] = useState("FCEFE0");
    const [extraFilter, setExtraFilter] = useState("");
    const setColor = (f, b) => {
        setFg(f);
        setBg(b);
    }


    return (
        <div>
            <Head>
                <title>👾 Pattern Dyne.org</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="p-5">
                <h1 className="text-5xl font-bold">
                    Welcome to <span className="text-purple-700"> 👾 pattern Dyne.org </span>
                </h1>

                <div className="grid grid-cols-3">
                    <ImagePicker setUuid={setUuid} />
                    <ArgumentPicker setColor={setColor} setSoftness={setSoftness} setExtraFilter={setExtraFilter} />
                </div>

                <ImageContext.Provider value={{
                    uuid: uuid,
                    softness: softness,
                    fg: fg,
                    bg: bg,
                    extraFilter: extraFilter
                }}>
                    <PreviewSection name="facebook" description="Because the size of this social network, Facebook images are mostly utilitarian. Don't expect people to passionately explore them and pin them to their moodboards. However, Facebook supports a wide variety of sizes, so you can utilize them to build a solid brand image.">
                        <Preview title="facebook image post" w={1200} h={630} tip="Pro Tip: Because posts with singular images take full width, you may use text as well as highly-detailed images. They will be easily recognizable and noticeable." />
                        <Preview title="facebook cover photo" w={820} h={312} tip="Pro Tip: Treat this like a billboard. Changing this picture regularly is usually a good decision. Experiment with images to see what your audience responds to best." />
                        <Preview title="facebook profile picture" w={180} h={180} tip="Pro Tip: People see this picture everywhere they stumble upon your page. Make sure it's a good one." />
                    </PreviewSection>

                    <PreviewSection name="twitter" description="Even though supported, pictures are not the main part of Twitter feeds — text is the king. However, Twitter provides every way for you to design your profile to make it sleek and appealing.">
                        <Preview title="twitter post image" w={1200} h={675} tip="Pro Tip: It's slightly taller than an Open Graph image, but you may use Open Graph if you're designing a picture for the Twitter Card." />
                        <Preview title="twitter header" w={1500} h={500} tip="Pro Tip: Because it will be displayed really wide, you can freely experiment with the layout. However, sometimes this image is cropped vertically, so don't put anything important to the very bottom of this image." />
                        <Preview title="twitter profile photo" w={400} h={400} tip="Pro Tip: Create the whole new profile experience by matching your profile photo with your Header picture." />
                    </PreviewSection>

                    <PreviewSection name="instagram" description="It's a part Facebook but it works different than Facebook itself. Today's Instagram is all about color palettes and visual aesthetics. People even design multiple images in a way that they look good together put into grid. Keep your images as visually appealing as possible.">
                        <Preview title="instagram square post" w={1080} h={1080} tip="Pro Tip: It takes the full width, so you can use text and details. They will be seen. Consider not only that but the palette of the whole image as well because it will be shown both large and small." />
                        <Preview title="instagram stories" w={1080} h={1920} tip="Pro Tip: Because Instagram supports additional interactive Stories features such as stickers and polls, you can design your Stories cover with that in mind, carefully placing blank areas where interactive elements would be." />
                        <Preview title="instagram profile picture" w={320} h={320} tip="Pro Tip: Keep your profile picture evergreen updating it as you travel or as the season changes. Try to match the palette and the overall visual aesthetic of your whole profile." />
                    </PreviewSection>

                    <PreviewSection name="youtube" description="On the world's largest hosting for videos, pictures are still very important. On YouTube, they are the instrument of attracting new audience, less so of keeping the existing one entertained. As the platform changes and clickbait falls out of grace, it's better to keep video thumbnails informative and truthful.">
                        <Preview title="youtube channel art" w={2560} h={1440} tip="Pro Tip: Unlike in Twitter, on YouTube the channel art is not cropped vertically, so you can freely experiment with what content you put there." />
                        <Preview title="youtube thumbnail" w={1280} h={720} tip="Pro Tip: Clickbait is a thing of the past. Nowadays it may damage how your audience perceives your channel. It's better to refrain from blank, filler thumbnails and instead choose the one that would be straight to the point." />
                        <Preview title="youtube profile picture" w={800} h={800} tip="Pro Tip: You can color-match your Profile picture with your Channel art to ensure premium experience. However, it's best not to leave your profile picture blank because it would also be displayed on its own." />
                    </PreviewSection>
                </ImageContext.Provider>
            </main>
        </div>
    )
}
