import clsx from "clsx";
import "./Card.css";
import Button from "../Button/Button";

export default function Card({
  setImgInfo,
  setIsModalOpen,
  img,
  title,
  subtitle,
  desc,
  price,
  classes,
}) {
  return (
    <div className={clsx("card grid grid-cols-2  gap-1", classes)}>
      <div className="row-span-3 w-[350px]">
        <div className="card-img">
          <img
            src={img}
            alt={title}
            text={title}
            onClick={(e) => {
              setImgInfo(e);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>
      <div className=" w-[350px] p-[20px]">
        <div className="card-title">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>
      </div>
      <div className="p-[20px]">
        <p>{desc}</p>
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between content-center">
          <div className="card-price">{price}</div>
          <div className="card-button">
            <Button
              text={"buy now"}
              type={"submit"}
              classes={"test"}
              click={() => alert()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
