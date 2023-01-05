import Header from '../../component/header/header';
import './visit.scss';
import { useEffect, useState } from 'react';
import { BsFillFileXFill } from "react-icons/bs";
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { axiosInstance } from '../../config';

function Visit(){
    const [images, setImages] = useState();

    async function loadImages(){
        try{
            const res = await axiosInstance.get('http://localhost:3001/api/images/places');
            const data = res.data.resources;
            console.log(data);
            setImages(data);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() =>{
        loadImages();
    }, []);

    return (
        <>
            <Header />
            <div className="content">
                <CloudinaryContext>
                {
                    images && images.map((images, index) => {
                        return (
                            <Image
                                key={index}
                                cloudName="dxivl2lh5"
                                publicId={images.public_id}
                                width="300"
                                height="200"
                                crop="scale"
                                className="mt-4 ms-4"
                            />
                        )
                    })
                }
                </CloudinaryContext>
            </div>
        </>
    );

    // const [images, setImages] = useState([]);
    // const [imageToRemove, setImageToRemove] = useState(null);

    // function handleRemoveImg(imgObj){
    //     setImageToRemove(imgObj.public_id);
    //     axios.delete(`https://backend-web-app-1.herokuapp.com/${imgObj.public_id}`)
    //     .then(() =>{
    //         setImageToRemove(null);
    //         setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
    //     })
    //     .catch((e) => console.log(e));
    // }

    // function handleOpenWidget(){
    //     var myWidget = window.cloudinary.createUploadWidget({
    //         cloudName: 'dkk8m0k1m', 
    //         uploadPreset: 'kxb72rwl'}, (error, result) => { 
    //           if (!error && result && result.event === "success") { 
    //             setImages((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}]);
    //           }
    //         }
    //     )
    //     myWidget.open();
    // }

    // return (
    //     <>
    //         <Header />
    //         <div className="content">
    //             <div className="row">
    //                 <div className="col-8 images-container">
    //                     {images.map((image) => (
    //                         <div className='image-preview'>
    //                             <img src={image.url} />
    //                             {imageToRemove != image.public_id && <BsFillFileXFill onClick={() => handleRemoveImg(image)} />}
    //                         </div>
    //                     ))}
    //                 </div>
    //                 <div className="col-4">
    //                     <button id="upload-widget" className="cloudinary-button" onClick={() => handleOpenWidget()}>
    //                         Upload pictures
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default Visit;
