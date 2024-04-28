import { TagBrand } from "../../utils/data/TagBrand";

function Tags() {
  return (
    <a href="/">
      {TagBrand.map((t) => (
        <div key={t.nameTag} className="w-1/4">
          <img
            loading="lazy"
            className="max-h-[140px] max-w-[100%] rounded-lg md:max-h-[175px] md:max-w-[100%]"
            src={t.imageFood}
          ></img>
          <h3 className="text-md mt-2 font-bold">{t.nameTag}</h3>
        </div>
      ))}
    </a>
  );
}

export default Tags;
  