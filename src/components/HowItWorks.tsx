import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "REHBERLİK",
    description:
      "Sınavlara alanında derece yapmış ve sana her konuda destek olacak koçların rehberliği ile ilerlemeni sağlıyoruz.",
  },
  {
    icon: <MapIcon />,
    title: "PROGRAM",
    description:
      "Senin ihtiyaçlarına ve eksiklerine özel olarak haftalık çalışma programları hazırlıyoruz.",
  },
  {
    icon: <PlaneIcon />,
    title: "TAKİP",
    description:
      "Çalışmalarını günlük takip ederek seni geliştirecek geri bildirimler veriyoruz.",
  },
  {
    icon: <GiftIcon />,
    title: "GÖRÜŞME",
    description:
      "Her hafta canlı görüşme yaparak sürecin nasıl ilerlediği hakkında konuşuyoruz ve aklındaki soru işaretlerini gideriyoruz.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        SENİ{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
          DİSPRO’DA{" "}
        </span>
        NELER BEKLİYOR ?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
