interface Props {
  classname?: string;
}

export const SliderButton = ({ classname }: Props) => {
  return (
    <div className={`absolute w-full h-25 pt-7 ${classname}`}>
      <div className="flex justify-end px-[6.25dvw]">
        <div className="flex gap-x-5">
          <button type="button" className="size-9 rounded-full overflow-hidden bg-[#e8e8ed]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M20 25c-.384 0-.768-.146-1.06-.44l-5.5-5.5a1.5 1.5 0 0 1 0-2.12l5.5-5.5a1.5 1.5 0 1 1 2.12 2.12L16.622 18l4.44 4.44A1.5 1.5 0 0 1 20 25z"></path>
            </svg>
          </button>
          <button type="button" className="size-9 rounded-full overflow-hidden bg-[#e8e8ed]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M22.56 16.938l-5.508-5.5a1.493 1.493 0 0 0-2.116.003 1.502 1.502 0 0 0 .004 2.121L19.384 18l-4.444 4.438A1.502 1.502 0 0 0 15.996 25c.382 0 .764-.145 1.056-.438l5.508-5.5a1.502 1.502 0 0 0 0-2.125z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
