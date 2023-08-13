interface Props {
  urlImage: string | null;
}

export const Message = ({ urlImage }: Props) => {
  return (
    <>
      {urlImage && (
        <span className="url-cloudinary-sumbit">
          Su imagen se a cargado correctamente! ✅
          <a target="_blank" href={urlImage}>
            {" "}
            Ver imagen cargada...
          </a>
        </span>
      )}
    </>
  );
};
