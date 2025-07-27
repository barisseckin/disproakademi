import { Statistics } from "./Statistics";
import reflecting from "../assets/reflecting.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={reflecting}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
                  DİSPRO{" "}
                </span>
                AKADEMİ NEDİR ?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Dispro; deneyimli ve üstün başarı elde etmiş koçların rehberliğinde bireysel çalışma programları sunarak
                öğrencilerin amaçlarına ulaşmalarına yardımcı olan, stratejik ve etkili yöntemler içeren bir akademidir.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
