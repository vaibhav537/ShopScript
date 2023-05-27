import { useState } from "react";
import { styled } from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 50%;
  height: 100%;
`;

const BigImageWrapper = styled.div`
  text-align: center;
  height: 20rem;
  max-height: 50%;
`;

const ImageButtons = styled.div`
  display: flex;
  flex-grow: 0;
  gap: 10px;
  margin-top: 6rem;
`;

const ImageButton = styled.div`
  ${(props) =>
    props.active
      ? `
opacity: 1;
`
      : `
opacity: 0.7;

`}
  height: 6rem;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            active={image === activeImage}
            key={image}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="..." />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
