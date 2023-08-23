import Styles from './ImageSelected.module.css'


interface Props {
  urlImage: string | null;
}

export const Message = ({ urlImage }: Props) => {
  return (
    <>
      {urlImage && (
        <div >
          <div className={Styles.imageContainer}>
            <img
            className={Styles.image}
            src={urlImage}
            alt=""
            />
          </div>
          Su imagen se a cargado correctamente! ✅
          <a target="_blank" href={urlImage}>
            {" "}
            Ver imagen cargada...
          </a>
        </div>
      )}
    </>
  );
};
