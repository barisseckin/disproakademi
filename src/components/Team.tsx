import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.postimg.cc/NFfsqfXV/bensu-template.jpg",
    name: "BENSU SEÇKİN",
    position: "DİL 5448.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/bensu-se%C3%A7kin-7a47a8262/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/bensuology?igsh=cGh3dHZiOHRhbHli",
      },
    ],
  },
  {
    imageUrl: "https://i.postimg.cc/pTDrtLdY/Whats-App-Image-2025-06-26-at-18-32-18.jpg",
    name: "ELİF BAL",
    position: "DİL 5148.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
      <section id="team" className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
          KOÇLAR
        </span>
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Disproakademi'nin ilham veren koç kadrosu ile öğrenme yolculuğunuza güç katın.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                  key={name}
                  className="relative bg-background shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                      src={imageUrl}
                      alt={`${name} ${position}`}
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-6 flex flex-col items-center text-center">
                  <CardTitle className="text-2xl font-semibold text-foreground mb-1">
                    {name}
                  </CardTitle>
                  <CardDescription className="text-primary text-sm tracking-wide uppercase mb-3">
                    {position}
                  </CardDescription>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Alanında deneyimli koçlarımız, hedeflerinize ulaşmanız için sizinle birlikte çalışır.
                  </p>

                  <div className="flex justify-center gap-4 mt-5">
                    {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                        <a
                            key={name}
                            rel="noreferrer noopener"
                            href={url}
                            target="_blank"
                            className={buttonVariants({ variant: "ghost", size: "sm" })}
                        >
                          <span className="sr-only">{name} icon</span>
                          {socialIcon(name)}
                        </a>
                    ))}
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </section>
  );
};
