import { VelocityScroll } from "./ui/scroll-based-velocity";

export function TitleSection({text}) {
  return (
    <VelocityScroll
      text={text}
      default_velocity={5}
      className="font-display text-center text-4xl font-extrabold tracking-[-0.02em] text-accent bg-gray-900 p-5 drop-shadow-sm md:text-7xl md:leading-[5rem] my-9"
    />
  );
}
