import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

interface ContactSectionProps {
  id: string;
}

export const ContactSection = ({ id }: ContactSectionProps) => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id={id}>
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl ">
                Let&apos;s Connect and Collaborate!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Always open to great conversations and new possibilities. If
                you&apos;re hiring or just want to chat, feel free to reach out!
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border boreder-gray-900">
                <a
                  // href="https://wa.me/9744874467?text=Hello%20Joshith,%20I%20am%20interested%20in%20your%20services."
                  // href="mailto:joshith737@gmail.com"
                  href="https://wa.me/+919744874467?text=Hello%20there!%20I'm%20interested%20in%20working%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">Contact Me</span>
                </a>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
