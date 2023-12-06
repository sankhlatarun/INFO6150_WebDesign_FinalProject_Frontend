import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const CustomCloudinaryImage = ({myImage}) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dgmp9hjsl' } });

  return (
    <AdvancedImage
    style={{ maxWidth: "100%" }}
    cldImg={cld.image(myImage)}
    // plugins={[responsive(), placeholder()]}
  />
  );
}

export default CustomCloudinaryImage;