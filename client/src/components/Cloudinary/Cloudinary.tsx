import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { BoxDragAndDrop } from "./BoxDragDrop";
import { ImageSelected } from "./ImageSelected";
import { Message } from "./Message";
import { fileUpload } from "./Cloudinary";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../redux/actions/actions";

export const DragAndDrop = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState<ImageListType>([]);
  const [urlImage, setUrlImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (imageList: ImageListType) => setImages(imageList);

  const onUpload = async () => {
    setLoading(true);
    const url = await fileUpload(images[0].file!);
    console.log(url);
    await dispatch(uploadImage(url));
    setLoading(false);

    if (url) setUrlImage(url);
    else alert("Error, please try again later. ❌");

    setImages([]);
  };

  return (
    <>
      <ImageUploading
        multiple={false}
        maxNumber={1}
        value={images}
        onChange={handleChange}
      >
        {({
          imageList,
          onImageUpload,
          dragProps,
          isDragging,
          onImageRemove,
          onImageUpdate,
        }) => (
          <>
            {imageList[0] ? (
              <ImageSelected
                img={imageList[0].dataURL!}
                {...{ onImageRemove, onUpload, onImageUpdate, loading }}
              />
            ) : (
              <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
            )}
          </>
        )}
      </ImageUploading>
      <Message urlImage={urlImage} />
    </>
  );
};
