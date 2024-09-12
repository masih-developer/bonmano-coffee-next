import Link from "next/link";

type ProductsType = {
  type: "products";
  products: {
    img: string;
    title: string;
    identifier: string;
  }[];
};
type BlogsType = {
  type: "blogs";
  blogs: {
    img: string;
    title: string;
  }[];
};

type BasePropsType = ProductsType | BlogsType;

export default function ResultSection(props: BasePropsType) {
  return (
    <div>
      <div className="bg-secondary-light text-secondary-shade border border-secondary flex items-center rounded-xl font-light p-2 h-11">
        {props.type === "products" ? "محصولات" : "مقالات"}
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        {Array.from({ length: 3 }, (_, index) => index + 1).map((item) => (
          <div className="flex items-center" key={item}>
            <Link
              href=""
              className="block shrink-0 size-32 sm:size-36 lg:size-40 xl:size-44 overflow-hidden rounded-xl border border-secondary bg-background"
            >
              <img
                src="https://www.bonmano.com/wp-content/uploads/2024/06/main-2-products-300x300.jpg"
                alt=""
                className="block size-full object-contain"
              />
            </Link>
            <div className="w-full rounded-xl -mr-5 py-5 px-2.5 bg-background shadow-lg flex items-center border border-[#e9e9e9]">
              <Link
                href=""
                className="flex flex-col gap-y-1.5 text-neutral-300 transition-colors hover:text-primary font-light text-sm"
              >
                {props.type === "products" ? (
                  <>
                    <span>دانه قهوه تک‌خاستگاه کنیا</span>
                    <span>
                      شناسه:{" "}
                      <span className="font-medium text-sm">352470370103</span>
                    </span>
                  </>
                ) : (
                  <span>قهوه چیست؟ از دانه قهوه تا نوشیدنی</span>
                )}
              </Link>
            </div>
          </div>
        ))}
        <Link
          href=""
          className="my-2.5 rounded-xl bg-primary text-white block w-fit px-4 py-2.5 text-sm"
        >
          نمایش نتایج بیشتر
        </Link>
        <div>
          <div className="bg-secondary-light text-secondary-shade border border-secondary flex items-center rounded-xl font-light p-2 h-11">
            دسته بندی {props.type === "products" ? "محصولات" : "مقالات"}
          </div>
          <ul className="flex items-center flex-wrap gap-1.5 my-5">
            {[
              "لوازم و تحهیزات قهوه",
              "قهوه فرانسه",
              "قهوه ترک",
              "شکر قهوه ای",
              "دستگاه قهوه ساز خانگی",
              "قهوه فوری",
              "دانه قهوه اتیوپی",
              "دانه قهوه اندونزی",
              "دانه قهوه کلمبیا",
            ].map((item, index) => (
              <li
                key={index}
                className="flex text-[15px] font-light items-center gap-1.5"
              >
                <Link href="" className="transition-colors hover:text-primary">
                  {item}
                </Link>
                {index !== 8 && <span className="text-primary">/</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
