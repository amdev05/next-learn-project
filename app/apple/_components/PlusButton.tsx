const variants = {
  light: "bg-white fill-dark",
  dark: "bg-black fill-white",
};

interface Props {
  variant?: keyof typeof variants;
}

export const PlusButton = ({ variant = "dark" }: Props) => {
  return (
    <button type="button" className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer ">
      <div className={`absolute bottom-5 right-5 size-9 p-2 rounded-full ${variants[variant]}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16 8.5h-4.5V4a1.5 1.5 0 0 0-3 0v4.5H4a1.5 1.5 0 0 0 0 3h4.5V16a1.5 1.5 0 0 0 3 0v-4.5H16a1.5 1.5 0 0 0 0-3z"></path>
        </svg>
      </div>
    </button>
  );
};
