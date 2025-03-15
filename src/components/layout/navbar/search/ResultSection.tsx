import Link from "next/link";

interface ProductsType {
  type: "products";
  products: {
    img: string;
    title: string;
    identifier: string;
  }[];
}
interface BlogsType {
  type: "blogs";
  blogs: {
    img: string;
    title: string;
  }[];
}

type BasePropsType = BlogsType | ProductsType;

export default function ResultSection(props: BasePropsType) {
  return (
    <div>
      <div className="flex h-11 items-center rounded-xl border border-secondary bg-secondary-light p-2 font-light text-secondary-shade">
        {props.type === "products" ? "محصولات" : "مقالات"}
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        {Array.from({ length: 3 }, (_, index) => index + 1).map((item) => (
          <div className="flex items-center" key={item}>
            <Link
              className="block size-32 shrink-0 overflow-hidden rounded-xl border border-secondary bg-background sm:size-36 lg:size-40 xl:size-44"
              href=""
            >
              <img
                alt=""
                className="block size-full object-contain"
                src="https://www.bonmano.com/wp-content/uploads/2024/06/main-2-products-300x300.jpg"
              />
            </Link>
            <div className="-mr-5 flex w-full items-center rounded-xl border border-[#e9e9e9] bg-background px-2.5 py-5 shadow-lg">
              <Link
                className="flex flex-col gap-y-1.5 text-sm font-light text-neutral-300 transition-colors hover:text-primary"
                href=""
              >
                {props.type === "products" ? (
                  <>
                    <span>دانه قهوه تک‌خاستگاه کنیا</span>
                    <span>
                      شناسه:{" "}
                      <span className="text-sm font-medium">352470370103</span>
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
          className="my-2.5 block w-fit rounded-xl bg-primary px-4 py-2.5 text-sm text-white"
          href=""
        >
          نمایش نتایج بیشتر
        </Link>
        <div>
          <div className="flex h-11 items-center rounded-xl border border-secondary bg-secondary-light p-2 font-light text-secondary-shade">
            دسته بندی {props.type === "products" ? "محصولات" : "مقالات"}
          </div>
          <ul className="my-5 flex flex-wrap items-center gap-1.5">
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
                className="flex items-center gap-1.5 text-[15px] font-light"
                key={index}
              >
                <Link className="transition-colors hover:text-primary" href="">
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
